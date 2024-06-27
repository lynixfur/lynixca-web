<script>
	import Navbar from "$lib/Navbar.svelte";
	import Banner from "$lib/Banner.svelte"; 
	import "../app.css";

	import { page } from '$app/stores';  
</script>

{#if $page.url?.pathname != "/lcm/overlay"}
<div class="text-white bg-neutral-950">
	<div class="min-h-screen flex justify-center">
		{#if $page.url?.pathname == "/" || $page.url?.pathname == "/station" || $page.url?.pathname == "/station/"}
		<div class="background-container w-full">
			<!-- Cool Space Background? -->
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
		</div>
	  	{/if}
		<div class="z-50 md:w-3/4 w-full md:px-0 px-7">
			<Navbar />
			<Banner />
			<slot />
		</div>
	</div>
</div>
{:else}
<slot />
{/if}