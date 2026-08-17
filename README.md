# FDTL PR Practice

Practice repo for the FDTL Week 1 "ship a PR, review one" exercise. Full instructions are on the Confluence page your trainer linked you — this README is just the quick reference.

## The exercise

1. **Clone the repo.**
   ```
   git clone https://github.com/c3-greg-franklin/fdtl-pr-practice.git
   cd fdtl-pr-practice
   ```
2. **Create a ticket.** File a Jira ticket for yourself in the `SSPA` (Sample Scrum Project A) project describing the task below.
3. **Branch off the ticket.** Name your branch after the ticket, e.g. `SSPA-123-fix-greeter`.
4. **Copy the template.** Copy [`exercises/TEMPLATE.js`](exercises/TEMPLATE.js) to `exercises/<your-name>.js`.
5. **Fix the bug.** `greet()` is missing its exclamation mark — point Claude Code at the file, read the diff, and fix it.
6. **Test it.** Run:
   ```
   node -e "console.log(require('./exercises/<your-name>.js').greet('World'))"
   ```
   You should see `Hello, World!`.
7. **Push and open a PR** against `main`.
8. **Review someone else's PR** — leave inline comments on their diff, then approve or request changes.

Each person works in their own file under `exercises/`, so PRs won't collide.
