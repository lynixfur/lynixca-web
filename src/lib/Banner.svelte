<script lang="ts">
	import { onMount } from "svelte";

	let daysUntilToronto = 0;

	const targetDate = new Date("June 29, 2024 00:00:00").getTime();

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
class="bg-red-900 py-2 px-5 max-w-[800px] rounded-3xl font-semibold -ml-1 md:mt-5 mt-10 flex space-x-4 items-center"
>
<img src="/Warning.png" class="w-10 h-10" />
<p>
	Attention! Project Howl is currently in effect please contact me on discord urgently!
</p>
</div>
{#if daysUntilToronto > 0}
	<div
		class="hidden bg-cyan-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-0 mt-10"
	>
		Lynix is going to Animaritime in {daysUntilToronto} days! Watch out for a
		Lynix sticker, 1 left!
	</div>

	<div
		class="bg-red-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-5 mt-10"
	>
		Attention! Sticker production has stopped due to a event plan change,
		stickers are now strictly reserved for FE 2024 Attendees!
	</div>
{/if}
