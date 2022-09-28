<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex h-screen items-center justify-center">
	<h1>{$page.status}: {$page.error?.message}</h1>
</section>

<svelte:head>
	<title>{$page.error?.message} - Volpair</title>
	<meta name="description" content={$page.error?.message} />
</svelte:head>
