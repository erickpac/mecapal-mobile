# Prompt para el mobile app — Account Deletion

Necesito que implementes el flujo de eliminación de cuenta en la app móvil, conectando con el backend NestJS + Cognito ya existente. Adjunto screenshots de Figma como referencia visual.

## Flujo UX (3 pantallas + banner global)

1. **Pantalla "Configuración / Mi cuenta"** — agregar botón "Eliminar mi cuenta" en rojo, al final de la pantalla.
2. **Pantalla "Confirmar eliminación"** — al tocar el botón:
   - Título claro ("Eliminar tu cuenta").
   - Advertencias: se eliminará en 30 días (o el valor devuelto por la API), qué se conserva (histórico de órdenes), qué no (datos personales).
   - Dropdown opcional **"¿Por qué te vas?"** con las opciones:
     - "Ya no uso la app"
     - "Creé otra cuenta"
     - "Problemas de privacidad"
     - "La app tiene muchos errores"
     - "Mala experiencia con un cliente/transportista"
     - "Faltan funciones que necesito"
     - "Prefiero no decir"
     - "Otro"

     Si elige "Otro", campo libre `otherReason` con máx 500 chars.
   - Campo obligatorio: **contraseña actual** (re-auth).
   - Botón de confirmación con segunda confirmación tipo "¿Estás seguro?".
3. **Pantalla de éxito** — "Tu cuenta se eliminará el [fecha]. Puedes cancelar iniciando sesión antes de esa fecha."
4. **Banner persistente** en pantallas principales cuando el usuario esté en estado `PENDING_DELETION`:
   > "Tu cuenta se eliminará el [fecha]. [Cancelar eliminación]"

## Cómo detectar el estado `PENDING_DELETION`

Toda response de auth (sign-in, complete-new-password) y de `/user/me` ahora incluye:

```json
{
  "user": {
    // ...otros campos existentes,
    "deletionScheduledFor": "2026-05-12T03:00:00.000Z"
  }
}
```

Si `deletionScheduledFor !== null`, mostrá el banner.

## Endpoints del backend

**Base URL:** `{API_BASE_URL}/api`
**Auth:** todos requieren `Authorization: Bearer <accessToken>`.

### 1. Solicitar eliminación de cuenta

- **Método:** `DELETE /auth/account`
- **Status esperado:** `200 OK`
- **Body:**
  ```json
  {
    "password": "contraseña-actual",
    "reason": "PRIVACY_CONCERNS",
    "otherReason": "texto opcional si reason === OTHER"
  }
  ```
- **Valores válidos para `reason`:** `NO_LONGER_USE`, `CREATED_ANOTHER_ACCOUNT`, `PRIVACY_CONCERNS`, `APP_ISSUES`, `BAD_EXPERIENCE`, `MISSING_FEATURES`, `PREFER_NOT_TO_SAY`, `OTHER`. Omitir el campo si no quiere dar razón.
- **Response:**
  ```json
  {
    "scheduledFor": "2026-05-12T03:00:00.000Z",
    "message": "Account deletion scheduled. You have 30 days to cancel by signing in again."
  }
  ```

### 2. Cancelar eliminación

- **Método:** `POST /auth/account/cancel-deletion`
- **Status esperado:** `200 OK`
- **Body:** vacío
- **Response:**
  ```json
  { "message": "Account deletion canceled." }
  ```

### 3. Auto-cancelación en sign-in

Cuando el usuario inicia sesión normalmente (mobile), el backend cancela automáticamente cualquier eliminación pendiente. La response de sign-in tendrá `user.deletionScheduledFor: null`. No hay que llamar al endpoint de cancel manualmente si el usuario simplemente vuelve a abrir la app.

## Errores posibles

| Caso | Status | Body | UX |
|------|--------|------|-----|
| Password incorrecto | `401` | `{ "message": "Invalid password" }` | "Contraseña incorrecta" |
| Órdenes activas / settlements / incidentes / requests | `409` | `{ "error": "DELETION_BLOCKED", "blockers": ["ACTIVE_ORDERS", "PENDING_SETTLEMENTS", ...] }` | Lista accionable: "Tenés órdenes activas. Completalas o cancelalas antes de eliminar tu cuenta." Mostrar por blocker. |
| Eliminación ya agendada | `409` | `{ "error": "DELETION_ALREADY_SCHEDULED", "scheduledFor": "2026-05-12..." }` | "Ya pediste eliminar tu cuenta. Se eliminará el [fecha]. [Cancelar eliminación]" |
| No hay eliminación agendada (al cancelar) | `404` | `{ "error": "DELETION_NOT_SCHEDULED" }` | "No hay eliminación pendiente" (edge case) |
| Rate limit | `429` | `{ "error": "RATE_LIMITED", "message": "Too many attempts. Please try again in a few minutes." }` | "Demasiados intentos, intentá en unos minutos" |
| Token inválido/ausente | `401` | estándar | Re-login |
| Validación DTO (password vacío, `otherReason` > 500) | `400` | class-validator estándar | Inline errors |
| Intenta mutar recursos mientras `PENDING_DELETION` | `403` | `{ "error": "ACCOUNT_PENDING_DELETION", "scheduledFor": "...", "message": "Your account is scheduled for deletion. Cancel..." }` | "Tu cuenta está programada para eliminarse. Cancela antes de hacer cambios." + botón cancelar. |

## Side effects importantes

- Después de pedir la eliminación, el usuario **NO puede** crear órdenes, hacer ofertas, editar perfil, etc. (todos los mutating endpoints devuelven `403`). Sí puede leer (`GET`), cancelar la eliminación, y cerrar sesión.
- Volver a iniciar sesión = auto-cancelación. No requiere acción explícita.
- **Cognito:** después de los 30 días (configurable) el backend borra la cuenta del User Pool. El usuario no puede volver a loguearse con el mismo email después de eso — puede crear una cuenta nueva desde cero.
- **Email:** el usuario recibe 2 emails — uno al programar (con fecha), otro al finalizar.

## Requerimientos técnicos

- Re-validar password del usuario antes de mostrar la pantalla de confirmación, para que no sea solo un tap.
- Validaciones en cliente idénticas a las del backend (password no vacío, `otherReason` ≤ 500).
- Banner persistente debe respetar el sistema de diseño (colores de warning, no rojo crítico).
- Loading + disabled state en botón de confirmación mientras la request está en vuelo.
- TypeScript estricto.

## Entregables

- Las 3 pantallas nuevas + banner global.
- Servicio/hook para los endpoints nuevos (reutilizando el cliente HTTP existente).
- Handler del `403 ACCOUNT_PENDING_DELETION` a nivel global para mostrar modal con acción "Cancelar eliminación" en cualquier pantalla donde aparezca.
- Actualizar el tipo del `user` en el store/context para incluir `deletionScheduledFor`.
