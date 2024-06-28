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

{#if daysUntilToronto > 0}
	<div
		class="hidden bg-cyan-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-0 mt-10"
	>
		Lynix is going to Animaritime in {daysUntilToronto} days! Watch out for a
		Lynix sticker, 1 left!
	</div>

	<div
		class="hidden bg-red-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-5 mt-10"
	>
		Attention! Sticker production has stopped due to a event plan change,
		stickers are now strictly reserved for FE 2024 Attendees!
	</div>
{/if}
