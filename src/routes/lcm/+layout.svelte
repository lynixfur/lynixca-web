<script>
	import Navbar from "$lib/Navbar.svelte";
	import Banner from "$lib/Banner.svelte"; 
	import "../../app.css";

	import { page } from '$app/stores';  
</script>
  
<div class="text-white">
	<slot />
</div>