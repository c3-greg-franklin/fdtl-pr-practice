# FDTL PR Practice

Practice repo for the FDTL Week 1 "ship a PR, review one" exercise. Full instructions are on the Confluence page your trainer linked you — this README is just the quick reference.

## The exercise

1. **Create a ticket.** File a Jira ticket for yourself in the sandbox project describing the task below.
2. **Branch off the ticket.** Name your branch after the ticket, e.g. `SBS-123-fix-greeter`.
3. **Copy the template.** Copy [`exercises/TEMPLATE.js`](exercises/TEMPLATE.js) to `exercises/<your-name>.js`.
4. **Fix the bug.** `greet()` is missing its exclamation mark — point Claude Code at the file, read the diff, and fix it.
5. **Test it.** Run:
   ```
   node -e "console.log(require('./exercises/<your-name>.js').greet('World'))"
   ```
   You should see `Hello, World!`.
6. **Push and open a PR** against `main`.
7. **Review someone else's PR** — leave inline comments on their diff, then approve or request changes.

Each person works in their own file under `exercises/`, so PRs won't collide.
