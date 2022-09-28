<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { refinedVolumes, contractAddress } = data;
</script>

<svelte:head>
	<title>{contractAddress} - Volpair</title>
	<meta name="description" content="View the volume history of {contractAddress} on Volpair" />
</svelte:head>

<section>
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Time</th>
				<th>Volume</th>
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
