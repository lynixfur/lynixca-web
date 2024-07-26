<script>
    import { onMount } from "svelte";
    import Banner from "$lib/Banner.svelte";
    import Navbar from "$lib/Navbar.svelte";

    let status = "Fetching status...";
    let statusClass = "text-cyan-500";
    let responseTime = "";

    onMount(async () => {
        const startTime = performance.now();
        try {
            const response = await fetch("https://api.lynix.ca");
            const endTime = performance.now();
            responseTime = `${(endTime - startTime).toFixed(2)} ms`;
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            //const data = await response.json();
            status = "Healthy"; // Assuming the API returns a JSON object with a `status` field
            updateStatusClass();
        } catch (error) {
            status = "Healthy";
            updateStatusClass();
            console.error(error);
           // alert(error);
        }
    });

    function updateStatusClass() {
        /*if(status == "Healthy") {
			statusClass = "text-green-500";
		} 
		if(status == "Degraded") {*/
        statusClass = "text-green-500";
        //}
        /*if(status == "Offline") {
			statusClass = "text-red-500";	
		}*/
    }
</script>

<main class="flex py-10">
    <div class="">
        <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
            <div class="my-16 flex flex-col items-start grow md:col-span-2">
                <div
                    class="block md:flex items-center mb-5 space-x-0 md:space-x-3"
                >
                    <img
                        src="/lynix-sticker.png"
                        class="w-20 mb-1.5"
                        alt="lynix"
                    />
                    <h1 class="text-6xl font-semibold text-neutral-100">
                        Hi, I'm Lynix! Thanks for meeting me at Canfurence!
                    </h1>
                </div>
                <p class="pt-4 text-lg grow text-neutral-300">
                    I'm super excited to have met you at Canfurence 2024! I'm originally from Moncton, NB but now live in Toronto Ontario! Yippi! I'm an IT Floof and I'm the cutest bean ever. Dare me say otherwise. Fear me! Caution! I may bite!3
                    <br /><br />
                    <span class="hidden text-sm font-semibold {statusClass}"
                        >Lynx Network - {status}
                        {#if responseTime}
                            ({responseTime})
                        {/if}
                    </span>
                </p>
                <div class="grid gap-5 grid-cols-5 mt-8">
                    <a
                        href="https://discord.com/users/885224265014738975"
                        aria-label="Discord"
                    >
                        <i
                            class="fa-brands fa-discord text-4xl text-neutral-400"
                        />
                    </a>
                    <a href="https://t.me/lynixfur" aria-label="Telegram">
                        <i
                            class="fa-brands fa-telegram text-4xl text-neutral-400"
                        />
                    </a>
                    <a href="https://github.com/lynixfur" aria-label="GitHub">
                        <i
                            class="fa-brands fa-github text-4xl text-neutral-400"
                        />
                    </a>
                    <a href="https://twitter.com/lynixfur" aria-label="Twitter">
                        <i
                            class="fa-brands fa-twitter text-4xl text-neutral-400"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anthony-roy-6316a624b/"
                        aria-label="LinkedIn"
                    >
                        <i
                            class="fa-brands fa-linkedin text-4xl text-neutral-400"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>
