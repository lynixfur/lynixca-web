<script lang="ts">
	import { onMount } from "svelte";

	let daysUntilToronto = 0;

	const targetDate = new Date("August 2, 2024 00:00:00").getTime();

	function updateCountdown() {
		const currentDate = new Date().getTime();
		const timeDifference = targetDate - currentDate;
		daysUntilToronto = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	}

	onMount(() => {
		// Initial update
		updateCountdown();

		// Update every second
		const interval = setInterval(updateCountdown, 1000);

		// Clear the interval on component destruction
		return () => clearInterval(interval);
	});
</script>
<div
class="bg-red-700 py-2 px-5 max-w-[800px] rounded-3xl font-semibold -ml-1 md:mt-5 mt-10 flex space-x-4 items-center"
>
<img src="/Warning.png" class="w-14 h-14" />
<p>
	A system outage is currently ongoing due to an issue with the panel system with canfurence and LCM on the following servers: CH1, TRX
</p>
</div>
<br/>
<div
class="hidden bg-red-900 py-2 px-5 max-w-[800px] rounded-3xl font-semibold -ml-1 md:mt-5 mt-10 flex space-x-4 items-center"
>
<img src="/Warning.png" class="w-10 h-10" />
<p>
	The Lynx Network is having an outage on FH-MR1 (Montreal), the source of this issue is unknown, no services are affected.
</p>
</div>
{#if daysUntilToronto > 0}
	<div
		class="bg-cyan-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-0 mt-10"
	>
		Lynix is going to Canfurence in {daysUntilToronto} days! Make sure to meet me there!
	</div>
{/if}
