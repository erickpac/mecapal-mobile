Review all uncommitted changes in the current branch. Follow these steps:

1. **Show current state**: Run `git status` and `git diff` (staged + unstaged)
2. **Review each changed file** for:
   - **Type safety**: No `any` types, proper interfaces
   - **Colors**: No hardcoded hex values, using `COLORS` const
   - **Icons**: Using `MaterialCommunityIcons` from `@expo/vector-icons`
   - **Imports**: All used references are properly imported
   - **Patterns**: Following existing component patterns (wrappers, hooks, etc.)
   - **i18n**: UI text using translation keys, not hardcoded strings
   - **Security**: No exposed secrets, API keys, or sensitive data
3. **Report findings**:
   - List each file with a ✅ (clean) or ⚠️ (issues found)
   - For issues, explain what needs to change
4. **Ask** if the user wants the issues fixed automatically
