<script>
    import { onMount } from "svelte";
    import moment from "moment";

    let countdown = {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    const targetDate = moment("2039-06-27T00:00:00");

    function updateCountdown() {
        const now = moment();
        const diff = moment.duration(targetDate.diff(now));

        countdown = {
            years: diff.years(),
            days: diff.days(),
            hours: diff.hours(),
            minutes: diff.minutes(),
            seconds: diff.seconds()
        };
    }

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    });
</script>

<div class="flex flex-col mt-20">
    <h1 class="text-6xl font-semibold mb-5 text-cyan-600">The Station</h1>
    <h2 class="text-3xl text-neutral-300 hidden">
       {countdown.years} Years {countdown.days} Days {countdown.hours} Hours {countdown.minutes} Minutes {countdown.seconds} Seconds
    </h2>
    <p class="pt-4 text-lg grow text-neutral-400">
        Something awaits here.
    </p>

    <a
        href="/"
        class="w-[150px] mt-10 rounded-full bg-cyan-800 hover:bg-cyan-900 transition-colors text-white font-bold py-2 px-5 text-center"
    >
        Return Home
    </a>
</div>
