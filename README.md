# FDTL PR Practice

Practice repo for the FDTL Week 1 "ship a PR, review one" exercise. Full instructions are on the Confluence page your trainer linked you — this README is just the quick reference.

## The exercise

1. **Clone the repo.** `cd` into whatever folder you want this repo to live in, then clone it:
   ```
   cd ~/wherever-you-keep-your-code
   git clone https://github.com/c3-greg-franklin/fdtl-pr-practice.git
   cd fdtl-pr-practice
   ```
2. **Create a ticket.** File a Jira ticket for yourself on the [`SSPA` (Sample Scrum Project A) board](https://c3energy.atlassian.net/jira/software/projects/SSPA/boards/2454?filter=&groupBy=none) describing the task below.
3. **Branch off the ticket.** Name your branch after the ticket, swapping in your own ticket key:
   ```bash
   git checkout -b <your-ticket-key>-fix-greeter
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
7. **Push your branch.**

   Stage your change:
   ```bash
   git add exercises/<your-name>.js
   ```
   Commit it, referencing your ticket key:
   ```bash
   git commit -m "<your-ticket-key>: fix missing exclamation mark in greet()"
   ```
   Push your branch:
   ```bash
   git push -u origin <your-ticket-key>-fix-greeter
   ```
8. **Open a PR.** Go to the repo on GitHub — after your push, it'll show a **Compare & pull request** banner right on the main page. Click it, fill in the title/description referencing your ticket key, and open it against `main`. Then, on the PR page, add your partner as a reviewer using the **Reviewers** panel on the right sidebar.
9. **Review someone else's PR.** Go to the repo's **Pull requests** tab on GitHub — you'll see the ones assigned to you there. Open it, click **Files changed** to view the diff, leave inline comments, then use **Review changes** (top right of that tab) to approve or request changes.
10. **Merge it.** Once your reviewer approves, go back to your own PR's page and click **Merge pull request**, then **Delete branch** — both buttons are right there at the bottom of the PR.

Each person works in their own file under `exercises/`, so PRs won't collide.
