<script>
	import Banner from "$lib/Banner.svelte";
	import Navbar from "$lib/Navbar.svelte";
</script>
    <div class="flex flex-col mt-20">
            <h1 class="text-6xl font-semibold mb-5 text-cyan-600">
                404
            </h1>
            <h2 class="text-3xl text-neutral-300">
                Page not found
            </h2>
            <p class="pt-4 text-lg grow text-neutral-400">
                The page you are looking for does not exist.
            </p>

            <a href="/" class="w-32 mt-10 rounded-full bg-cyan-800 hover:bg-cyan-900 transition-colors text-white font-bold py-2 px-5 text-center">
                Go Home
            </a>
            
            <img src="/lynix.png" class="hidden md:block fixed bottom-0 right-48 w-64 mt-4" alt="lynix peeking in the corner of the screen"/>
        </div>