<script>
	import { authClient } from '$lib/client/auth/auth-client';

	const onSignInGitHub = async () => {
		await authClient.signIn.social({
			provider: 'github',
			/**
			 * You should set this to where you want your user to land as they sign in.
			 */
			callbackURL: '/dashboard',

			/**
			 * This is the URL that will be used to create a new user.
			 * If you don't set this, the user will be redirected to the callbackURL.
			 */
			newUserCallbackURL: '/dashboard'
		});
	};
</script>

<div class="space-y-4">
	<div class="flex gap-4">
		<button type="button" class="btn preset-filled-primary-500" on:click={onSignInGitHub}
			>Sign in with GitHub</button
		>
	</div>
</div>
