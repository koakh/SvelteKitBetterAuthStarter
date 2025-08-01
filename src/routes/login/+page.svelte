<script>
  import { authClient } from "$lib/client/auth/auth-client";

  const signInGitHub = async () => {
    await authClient.signIn.social({
      provider: "github",
      /**
       * You should set this to where you want your user to land as they sign in.
       */
      callbackURL: "/dashboard",

      /**
       * This is the URL that will be used to create a new user.
       * If you don't set this, the user will be redirected to the callbackURL.
       */
      newUserCallbackURL: "/dashboard",
    });
  };
</script>

<button class="button" on:click={signInGitHub}> Sign in with GitHub </button>