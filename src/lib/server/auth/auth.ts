import { getRequestEvent } from "$app/server";
import { BETTER_AUTH_SECRET, BETTER_AUTH_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { betterAuth } from "better-auth";
import { sveltekitCookies } from "better-auth/svelte-kit";
import Database from "better-sqlite3";

export const auth = betterAuth({
  secret: BETTER_AUTH_SECRET,
  url: BETTER_AUTH_URL,
  // Database
  database: new Database("./sqlite.db"),
  // Authentication Methods
  emailAndPassword: {
    enabled: true,
  },
  // Providers
  socialProviders: {
    github: {
      clientId: GITHUB_CLIENT_ID as string,
      clientSecret: GITHUB_CLIENT_SECRET as string,
    },
  },
  // https://claude.ai/chat/2de507f4-f01a-4ffc-8aee-68b2886067c1
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [sveltekitCookies(getRequestEvent as any)],
})