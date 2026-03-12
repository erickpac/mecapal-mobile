Start a new feature branch. Argument: $ARGUMENTS

1. Make sure you're on the `develop` branch and it's clean:
   ```
   git checkout develop
   git status
   ```
2. Create the feature branch:
   - If the argument is provided, use it: `feature/<argument>`
   - If no argument, ask the user for a branch name
   ```
   git checkout -b feature/<name> develop
   ```
3. Confirm the branch was created and you're on it

Important:

- Always branch from `develop`
- Use kebab-case for branch names (e.g., `feature/add-payment-flow`)
- Do NOT start coding until the user gives instructions
