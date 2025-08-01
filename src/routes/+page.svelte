<script>
	import { goto } from '$app/navigation';

	const gotoLogin = async () => {
		await goto('/login');
	};
</script>

<button class="button" on:click={gotoLogin}> Go to Login Page </button>
