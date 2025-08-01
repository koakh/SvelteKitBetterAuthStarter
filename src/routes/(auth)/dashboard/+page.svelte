<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/client/auth';

	const { user } = page.data as PageData;

	const onSignOut = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					// redirect to login page
					goto('/login');
				}
			}
		});
	};
</script>

<div>
	{#if user}
		<img class="avatar" src={user.image} alt="Rounded avatar" />
		<ul>
			<ul>id: {user.id}</ul>
			<ul>name: {user.name}</ul>
			<ul>email: {user.email}</ul>
			<ul>emailVerified: {user.emailVerified}</ul>
			<ul>image: {user.image}</ul>
			<ul>createdAt: {user.createdAt}</ul>
			<ul>updatedAt: {user.updatedAt}</ul>
		</ul>
	{/if}
</div>

<button class="button" on:click={onSignOut}> SignOut </button>
