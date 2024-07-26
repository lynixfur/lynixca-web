<script lang="ts">
	let isOpen = false;
	const toggleNav = () => {
		isOpen = !isOpen;
	};
</script>

<header class=" text-white items-center py-14 md:flex hidden">
	<nav class="flex items-center space-x-8">
		<a href="/" class="font-semibold text-lg">
			<img src="/LynixLogo.svg" alt="lynix" class="h-14 w-14" />
		</a>
		<a href="/projects" class="font-semibold text-lg hover:text-cyan-600 transition-colors">Projects</a>
		<a href="/blog" class="font-semibold text-lg hover:text-cyan-600 transition-colors">Blog</a>
		<a href="/events" class="font-semibold text-lg hover:text-cyan-600 transition-colors flex items-center">Events
			<i class="fa fa-circle text-xs ml-2 text-green-600 animate-pulse" aria-hidden="true"></i>
		</a>
		<a href="https://cloud.lynix.ca" class="font-semibold text-lg hover:text-cyan-600 transition-colors">Lynx Cloud</a>
		<a href="https://aff.lynix.ca" class="flex items-center font-semibold text-lg hover:text-cyan-600 transition-colors hidden">Atlantic FurFest <span class="ml-2 bg-cyan-700 text-white text-xs me-2 px-2.5 py-0.5 rounded-full font-bold">New</span></a>
		<a href="/about" class="font-semibold text-lg hover:text-cyan-600 transition-colors">About</a>
		<a href="https://lynix.ca" class="hidden font-semibold text-lg hover:text-cyan-600 transition-colors">Contact</a>
	</nav>
	<!-- TODO: Work on mobile interface -->
	<button class="nav-button hidden" on:click={toggleNav} aria-label="Toggle Navigation">
        <svg height="24px" width="24px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
	</button>
</header>