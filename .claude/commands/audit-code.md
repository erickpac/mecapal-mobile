Audit the codebase for common issues. Run all checks and report findings:

## Checks to run:

### 1. Hardcoded colors

Search for hex colors (`#fff`, `#000`, `#ef6e30`, etc.) in `.tsx` and `.ts` files that should use `COLORS` from `@/consts/colors`. Ignore `tailwind.config.js`, `consts/colors.ts`, and `app.config.ts`.

### 2. Missing COLORS imports

Find files that reference `COLORS.` but don't import from `@/consts/colors`.

### 3. `any` type usage

Search for explicit `any` type annotations (`: any`, `as any`, `<any>`) across the codebase. Exclude `node_modules/`.

### 4. Direct library usage instead of wrappers

Check if any screen files import directly from `react-native-paper` (`Button`, `TextInput`) instead of using the project wrappers (`@/components/button`, `@/components/input`). Exclude the wrapper files themselves and the `components/` directory.

### 5. Inconsistent icon usage

Check for any icon imports that aren't `MaterialCommunityIcons` from `@expo/vector-icons`.

### 6. Missing translations

Search for hardcoded Spanish/English UI strings in screen files that should use `useTranslation` / `t()`.

## Output format:

For each check, report:

- ✅ if no issues found
- ⚠️ with file:line details if issues found
- Total count of issues per category

Do NOT fix anything — just report. Ask if the user wants fixes applied.
