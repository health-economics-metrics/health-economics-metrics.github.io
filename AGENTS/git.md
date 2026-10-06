# Git

- Commits are SSH-signed with a passphrase-protected key. If a commit hangs on "Enter passphrase", ask the user to unlock the key. Do not bypass signing.
- Commit only when asked. End commit messages with the attribution line the harness specifies.
- One logical change per commit. For a language: one commit for its `locales/` directories. For a locale registration: content, site registration and spec row as separate commits.
- To undo a pushed or shared commit, use `git revert`, and resolve conflicts by checking whether the file existed before the reverted commit.
- Do not touch unrelated files. If a tool (for example `pnpm sync:content`) pulls in unrelated changes, revert them before committing.
