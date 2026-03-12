Finish the current feature branch and merge to develop. Follow these steps exactly:

1. **Check status**: Run `git status` and `git diff` to see all pending changes
2. **Commit**: If there are uncommitted changes, stage and commit them with a proper commit message following the project conventions (type: description, no Co-Authored-By)
3. **Update docs if needed**: Review what changed in this branch vs develop (`git diff develop...HEAD`). If there are architectural changes, new dependencies, new commands, or workflow changes:
   - Update `CLAUDE.md` (project guide for AI assistants)
   - Update `README.md` (project docs for developers)
   - Commit doc changes separately: `docs: update documentation for <feature>`
4. **Squash merge**: Switch to develop and squash merge the feature branch:
   ```
   git checkout develop
   git merge --squash <branch-name>
   git commit -m "<type>: <summary of all changes in the branch>"
   ```
5. **Report**: Show the final squash commit and confirm the merge is complete

Important:

- Always squash merge to develop (never regular merge)
- Do NOT push to remote unless explicitly asked
- Do NOT delete the feature branch unless explicitly asked
- Follow commit message conventions from CLAUDE.md
