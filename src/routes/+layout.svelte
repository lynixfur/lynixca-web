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
		<div class="background-container w-full">
			<!-- CN Tower -->
		  	<p class="hidden">CN Tower by Fatemah Manji from https://thenounproject.com/browse/icons/term/cn-tower/ (CC BY 3.0)</p>
		  	<img src="/cn-tower.svg" class="cn-tower" alt="Toronto CN Tower"/>
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