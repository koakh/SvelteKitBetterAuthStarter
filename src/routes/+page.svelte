<script>
	import { goto } from '$app/navigation';

	const gotoLogin = async () => {
		await goto('/login');
	};
</script>

<div class="space-y-4">
	<div class="flex gap-4">
		<button type="button" class="btn preset-filled-primary-500" on:click={gotoLogin}
			>Go to Login Page</button
		>
	</div>
</div>
