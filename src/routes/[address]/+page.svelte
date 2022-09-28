<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { refinedVolumes, contractAddress } = data;
</script>

<svelte:head>
	<title>{contractAddress} - Volpair</title>
	<meta name="description" content="View the volume history of {contractAddress} on Volpair" />
</svelte:head>

<section class="my-32">
	<table>
		<thead>
			<tr>
				<th scope="col">Date</th>
				<th scope="col">Time</th>
				<th scope="col">Volume</th>
			</tr>
		</thead>
		<tbody>
			{#each refinedVolumes as volume}
				<tr>
					<td>{volume.date}</td>
					<td>{volume.time}</td>
					<td>{volume.volume}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	table {
		@apply w-full text-sm text-left text-gray-600 table-auto overflow-x-auto relative shadow-md sm:rounded-lg;
	}

	thead {
		@apply text-xs text-gray-800 uppercase bg-gray-50;
	}

	thead th {
		@apply py-3 px-6;
	}

	tbody tr {
		@apply bg-white border-b;
	}

	tbody tr td {
		@apply p-6;
	}

	tbody tr:nth-child(even) {
		@apply bg-gray-50;
	}
</style>
