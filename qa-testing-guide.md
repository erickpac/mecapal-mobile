# Guía de pruebas - App Mekapal

## 1. Onboarding (primera apertura)
- Visualizar la pantalla de bienvenida con el splash screen.
- Recorrer los slides introductorios.
- Seleccionar tipo de usuario (Cliente / Transportista).
- Llegar a la pantalla de opciones de autenticación (Iniciar sesión / Registrarse / Continuar como invitado).
- Verificar que al reabrir la app no se muestre el onboarding nuevamente.

## 2. Autenticación

### Registro
- Registrarse como **Cliente** y como **Transportista** (probar ambos roles).
- Validar campos obligatorios y formato de email/teléfono/contraseña.
- Verificar mensajes de error con datos inválidos o email ya registrado.
- Confirmar recepción y flujo de **verificación de email**.

### Login
- Iniciar sesión con credenciales válidas.
- Validar mensaje de error con credenciales incorrectas.
- Confirmar que la sesión persiste al cerrar y reabrir la app.
- Cerrar sesión desde el perfil.

### Olvidé mi contraseña
- Solicitar recuperación con email válido / inválido.
- Recibir el correo y abrir el enlace/código.
- Completar el restablecimiento y ver pantalla de éxito.
- Iniciar sesión con la nueva contraseña.

### Cambiar contraseña (usuario logueado)
- Cambiar contraseña desde Perfil → Seguridad.
- Validar contraseña actual incorrecta.
- Validar reglas de nueva contraseña y confirmación.
- Verificar que la sesión siga activa tras el cambio.

## 3. Modo Invitado
- Ingresar como invitado y validar acceso limitado.
- Confirmar que se invite a registrarse al intentar acciones restringidas.

## 4. Manejo de direcciones
- Listar direcciones guardadas (estado vacío incluido).
- Agregar nueva dirección (búsqueda, selección en mapa, alias).
- Editar dirección existente.
- Eliminar dirección.
- Marcar/cambiar dirección predeterminada.
- Validar permisos de ubicación (otorgar / denegar).

## 5. Navegación general
- Recorrer las tabs visibles según el rol (Cliente vs Transportista).
- Validar header, botones de regreso y transiciones.
- Probar el splash screen al iniciar (debe verse correctamente, sin recortes).

## 6. Cosas adicionales a considerar
- **Permisos del sistema:** ubicación, notificaciones, cámara/galería (si aplica al subir foto de perfil/vehículo).
- **Estados de red:** comportamiento sin internet o con conexión lenta.
- **Manejo de tokens:** dejar la app abierta un tiempo prolongado para validar el refresh automático del token (no debe forzar logout).
- **Deep links / enlaces de email:** que el enlace de verificación y reset abra la app correctamente.
- **Ambiente Staging:** confirmar que las builds apunten a la API de staging y muestren el ícono/nombre correcto (`Mekapal Staging`).
- **Multiplataforma:** probar en iOS y Android (y distintos tamaños de pantalla / notch).
- **Idioma del dispositivo:** abrir la app con el sistema en inglés y en español para validar el fallback.
