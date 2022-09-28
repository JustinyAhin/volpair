<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex justify-center items-center h-screen">
	<h1>{$page.status}: {$page.error?.message}</h1>
</section>

<svelte:head>
	<title>{$page.error?.message} - Volpair</title>
	<meta name="description" content={$page.error?.message} />
</svelte:head>
