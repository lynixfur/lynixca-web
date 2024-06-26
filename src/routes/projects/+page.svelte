<script>
    import moment from "moment";

    let now = moment(); // Get current datetime

    // Format datetime
    let formattedDateTime = now.format("MMMM YYYY");
</script>

<div class="my-20 w-full space-y-5">
    <h1 class="text-6xl font-semibold text-neutral-100 pb-5">
        <i class="fa-solid fa-code"></i> Projects
    </h1>

    <!-- Search Bar & Filters -->
    <div class="flex items-center space-x-4 w-1/2">
        <!-- Search Bar -->
        <input
            type="text"
            class="border-2 border-neutral-700 bg-neutral-900 px-4 py-2 rounded-full w-full"
            placeholder="Search projects"
        />
    </div>

    <!-- Grid 2 -->
    <div class="grid grid-cols-2 gap-10 pt-10">
        <div class="flex space-x-4">
            <div>
                <h2 class="text-2xl text-cyan-500 font-bold mb-2">
                    Lynx Network
                </h2>
                <p class="font-semibold text-cyan-200">{`February 2019 to Present`}</p>
                <p>
                    Lynx Network is my personal infrastructure where I work on
                    IT things and even host this website! <strong
                        >Did you know?</strong
                    > It's called Lynx as the my favorite animal is a lynx!
                </p>
                <div class="flex space-x-2 mt-3">
                    <a
                        href="https://lynix.ca"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-solid fa-link"></i></a
                    >
                    <a
                        href="#"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-brands fa-github"></i></a
                    >
                </div>
            </div>
            <img
                src="/LynixLogo.svg"
                alt="Lynix"
                class="rounded-xl w-32 h-32 pt-5 border-2 bg-neutral-900 border-neutral-800 p-3 object-fit"
            />
        </div>
        <div class="flex space-x-4">
            <div>
                <h2 class="text-2xl text-cyan-500 font-bold mb-2">WaterWolf</h2>
                <p class="font-semibold text-cyan-200">{`May 2024 to Present`}</p>
                <p>
                    WaterWolf is a community in VRChat focused on building,
                    exploring and promoting immersive and enjoyable worlds.
                </p>
                <div class="flex space-x-2 mt-3">
                    <a
                        href="https://lynix.ca"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-solid fa-link"></i></a
                    >
                    <a
                        href="#"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-brands fa-github"></i></a
                    >
                    <a
                        href="#"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-brands fa-discord"></i></a
                    >
                </div>
            </div>
            <img
                src="/WaterWolf_TSWhite.png"
                alt="Lynix"
                class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"
            />
        </div>
        <div class="flex space-x-4">
            <div>
                <h2 class="text-2xl text-cyan-500 font-bold mb-2">
                    DEFCON Furs 2024
                </h2>
                <p class="font-semibold text-cyan-200">{`June 2024 to Present`}</p>
                <p>
                    DEFCON Furs is a non-profit group that organizes events and
                    parties at DEF CON for members of the infosec community that
                    share an interest in the furry fandom.
                </p>
                <div class="flex space-x-2 mt-3">
                    <a
                        href="https://lynix.ca"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-solid fa-link"></i></a
                    >
                    <a
                        href="#"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-brands fa-github"></i></a
                    >
                </div>
            </div>
            <img
                src="/logos/logo.svg"
                alt="Lynix"
                class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"
            />
        </div>
        <div class="flex space-x-4">
            <div>
                <h2 class="text-2xl text-cyan-500 font-bold mb-2">Furality</h2>
                <p class="font-semibold text-cyan-200">{`December 2023 to Present`}</p>
                <p class="">
                    Furality is an online furry convention that is held annually
                    in VRChat, I currently contribute with furality to make
                    great events for our future attendees while helping in the
                    backend systems of furality with my paws!
                </p>
                <div class="flex space-x-2 mt-3">
                    <a
                        href="https://furality.org"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-solid fa-link"></i></a
                    >
                    <a
                        href="https://furality.org"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-brands fa-github"></i></a
                    >
                </div>
            </div>
            <img
                src="/logos/furalitylogo.png"
                alt="Lynix"
                class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"
            />
        </div>
        <div class="flex space-x-4">
            <div>
                <h2 class="text-2xl text-cyan-500 font-bold mb-2">
                    DEFCON Furs 2023
                </h2>
                <p class="font-semibold text-cyan-200">{`May 2023 to August 2023`}</p>
                <p>
                    DEFCON Furs is a non-profit group that organizes events and
                    parties at DEF CON for members of the infosec community that
                    share an interest in the furry fandom.
                </p>
                <div class="flex space-x-2 mt-3">
                    <a
                        href="https://lynix.ca"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-solid fa-link"></i></a
                    >
                    <a
                        href="#"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-brands fa-github"></i></a
                    >
                </div>
            </div>
            <img
                src="/logos/logo.svg"
                alt="Lynix"
                class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"
            />
        </div>
        <div class="flex space-x-4">
            <div>
                <h2 class="text-2xl text-cyan-500 font-bold mb-2">
                    CCNB Cyse Network Infrastructure
                </h2>
                <p class="font-semibold text-cyan-200">{`September 2022 to April 2024`}</p>
                <p>
                    During my studies at CCNB in Cybersecurity I got the chance
                    to develop and design a infrastructure with my Cybersecurity
                    Coordinator. We built this network to help students with VMS
                    or Labs and providing secure wifi for both CYSE 1 and CYSE 2
                </p>
            </div>
            <img
                src="/logos/ccnb.png"
                alt="Lynix"
                class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"
            />
        </div>
        <div class="flex space-x-4">
            <div>
                <h2 class="text-2xl text-cyan-500 font-bold mb-2">
                    Bloody ARK
                </h2>
                <p class="font-semibold text-cyan-200">{`September 2021 to Present`}</p>
                <p>
                    Bloody ARK is a massive ARK: Survival Evolved Cluster that
                    I've contributed to by making their backend CMS and HUB
                    Portal which relays information between ARK and your
                    browser.
                </p>
                <div class="flex space-x-2 mt-3">
                    <a
                        href="https://bloody.gg"
                        target="_blank"
                        class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"
                        ><i class="fa-solid fa-link"></i></a
                    >
                </div>
            </div>
            <img
                src="/logos/bloodyark.png"
                alt="Lynix"
                class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"
            />
        </div>
    </div>
</div>
