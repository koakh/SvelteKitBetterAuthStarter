import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/auth/auth";

/**
 * Layout server load function
 *
 * This function checks if the user is authenticated.
 * If not, it redirects to the login page.
 */
export const load: LayoutServerLoad = async ({ request }) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  /**
   * This is the important part.
   * If the user is authenticated, redirect to the dashboard page.
   */
  if (session) {
    throw redirect(302, "/dashboard");
  }
};