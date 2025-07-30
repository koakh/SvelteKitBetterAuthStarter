# NOTES

## Bootstrap SvelteKit App

mkdir -p /home/mario/Development/Svelte/SvelteKitBetterAuthStarter
cd /home/mario/Development/Svelte/SvelteKitBetterAuthStarter
cp ~/.nixshell/nix-shell-node.nix ./default.nix
echo "use nix" > .envrc && direnv allow
git init
git add .
git commit -am "first commit"

https://svelte.dev/blog/sv-the-svelte-cli

npx sv create

bun i
bun run dev

## Configure BetterAuth

- [Installation | Better Auth](https://www.better-auth.com/docs/installation)

bun add better-auth better-sqlite3
bun add --save-dev @types/better-sqlite3

add auth.ts

bunx @better-auth/cli generate
bunx @better-auth/cli migrate



https://github.com/igalklebanov/kysely-surrealdb