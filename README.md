# FDTL PR Practice

Practice repo for the FDTL Week 1 "ship a PR, review one" exercise. Full instructions are on the Confluence page your trainer linked you — this README is just the quick reference.

## The exercise

1. **Clone the repo.** `cd` into whatever folder you want this repo to live in, then clone it:
   ```
   cd ~/wherever-you-keep-your-code
   git clone https://github.com/c3-greg-franklin/fdtl-pr-practice.git
   cd fdtl-pr-practice
   ```
2. **Create a ticket.** File a Jira ticket for yourself in the `SSPA` (Sample Scrum Project A) project describing the task below.
3. **Branch off the ticket.** Name your branch after the ticket:
   ```bash
   git checkout -b SSPA-123-fix-greeter
   ```
4. **Copy the template.** Copy [`exercises/TEMPLATE.js`](exercises/TEMPLATE.js) to `exercises/<your-name>.js`:
   ```bash
   cp exercises/TEMPLATE.js exercises/<your-name>.js
   ```
5. **Fix the bug.** Open Claude Code in the repo:
   ```bash
   claude
   ```
   Then prompt it:
   ```
   In exercises/<your-name>.js, greet() should return "Hello, <name>!" but it's missing the exclamation mark — fix it.
   ```
   Read the diff it proposes before accepting it.
6. **Test it.** Run:
   ```bash
   node -e "console.log(require('./exercises/<your-name>.js').greet('World'))"
   ```
   You should see `Hello, World!`.
7. **Push and open a PR** against `main`.

   Stage your change:
   ```bash
   git add exercises/<your-name>.js
   ```
   Commit it:
   ```bash
   git commit -m "SSPA-123: fix missing exclamation mark in greet()"
   ```
   Push your branch:
   ```bash
   git push -u origin SSPA-123-fix-greeter
   ```
   Open the PR:
   ```bash
   gh pr create --base main --title "SSPA-123: fix greet() bug" --body "Fixes SSPA-123 — greet() was missing its exclamation mark."
   ```
   On the PR page in GitHub, add your partner as a reviewer in the **Reviewers** panel so they get notified.
8. **Review someone else's PR** — you'll only see it in your review queue once they've added you as a reviewer (see above). Leave inline comments on their diff, then approve or request changes.
9. **Merge it.** Once your reviewer approves, click **Merge pull request** on the PR page in GitHub, then delete the branch — that's part of closing out the ticket.

Each person works in their own file under `exercises/`, so PRs won't collide.
