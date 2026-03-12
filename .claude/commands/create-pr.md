Create a Pull Request for the current branch. Follow these steps exactly:

1. **Analyze changes**: Run `git log develop...HEAD --oneline` and `git diff develop...HEAD` to understand all changes in this branch
2. **Push branch**: Push the current branch to remote with `git push -u origin <branch-name>`
3. **Determine PR type**: Based on the changes, identify the type:
   - 🐛 Bug fix
   - 🚀 New feature
   - 💥 Breaking change
   - 🛠️ Code refactor or improvement
   - 🧪 Test enhancement
   - 📖 Documentation update
4. **Create PR** using `gh pr create` targeting `develop` branch with this format:

```
gh pr create --base develop --title "<concise title>" --body "$(cat <<'EOF'
## Description

<1-3 sentences explaining what this PR does and why>

## Type of Changes

- [x] <matching type from above>

## Checklist

- [x] Code compiles and runs correctly
- [x] Linting and formatting rules have been followed
- [ ] Corresponding tests have been added and/or updated
- [x] Documentation has been updated (if applicable)
- [x] The PR title is clear and uses proper formatting
- [x] Commits are clean, with descriptive messages

## How Has This Been Tested?

<describe how changes were tested — manual testing on iOS/Android, specific screens checked, etc.>

## Screenshots (if applicable)

N/A

## Further Comments

N/A
EOF
)"
```

5. **Report**: Show the PR URL

Important:

- Target branch is always `develop` unless explicitly told otherwise
- PR title should be under 70 characters
- Check the test checkbox only if tests actually exist
- Be specific in the "How Has This Been Tested?" section based on actual changes
