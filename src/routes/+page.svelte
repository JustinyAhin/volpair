<script lang="ts">
	import { page } from '$app/stores';
	const baseUrl = $page.url.origin;
</script>

<svelte:head>
	<title>Volpair - Ethereum blockchain contract volumes</title>
	<meta name="description" content="Ethereum blockchain contract volumes" />
</svelte:head>

<section class="my-32 space-y-8">
	<div class="space-y-2">
		<h1>Volpair</h1>
		<p>
			Volpair gives you the volume of a contract address for the Ethereum blockchain for the past 7
			days.
		</p>
	</div>

	<div class="space-y-2">
		<h2>Instructions</h2>
		<p>
			Enter a contract address at the end of the URL. For example, to view the volume of the Uniswap
			for <code>0x7efaef62fddcca950418312c6c91aef321375a00</code>, you would go to
			<a
				href="{baseUrl}/0x7efaef62fddcca950418312c6c91aef321375a00"
				class="font-bold text-indigo-700 hover:text-indigo-900 hover:underline"
				>{baseUrl}/0x7efaef62fddcca950418312c6c91aef321375a00</a
			>.
		</p>
	</div>

	<div class="space-y-2">
		<h2>Example of valid contract addresses</h2>
		<ul class="space-y-1">
			<li>0x7efaef62fddcca950418312c6c91aef321375a00</li>
			<li>0x521c79bfb7c0f528fbb2366b494f14b60ce055f3</li>
			<li>0x0ed7e52944161450477ee417de9cd3a859b14fd0</li>
			<li>0x74e4716e431f45807dcf19f284c7aa99f18a4fbc</li>
			<li>0xf45cd219aef8618a92baa7ad848364a158a24f33</li>
			<li>0x34c422989df98e8369f28eb9799eac1be2df70d0</li>
			<li>0x352008bf4319c3b7b8794f1c2115b9aa18259ebb</li>
			<li>0x63b30de1a998e9e64fd58a21f68d323b9bcd8f85</li>
		</ul>
	</div>
</section>
