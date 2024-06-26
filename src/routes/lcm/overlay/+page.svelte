<script lang="ts">

    let tiltify = 13091.19;
    let other = 4000.00;

    export let charityDonationAmount: number = tiltify + other;
    const goalAmount: number = 20000;
  
    // Calculate progress percentage
    const progressPercentage: number = (charityDonationAmount / goalAmount) * 100;
  
    // Function to format currency
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    // Make a fetch api to api.lynix.ca/charity/donation_amount and set the text on the page to the response
    fetch('https://api.lynix.ca/charity/donation_amount')
    .then(response => response.json())
    .then(data => {
        charityDonationAmount = data.amount;
    })
  </script>
  
  <div class="p-5 bg-neutral-950 border-b border-gray-600">
    <!-- flex with progress bar -->
    <div class="flex items-center space-x-5">
      <img src="/lynix.png" alt="lynix" class="w-10 -mt-1" />
      <div class="flex flex-col flex-1">
        <h3 class="text-2xl font-semibold">Current Panel: Waiting for FE 2024!</h3>
        <p class="text-lg text-neutral-400">Next Panel: Flight (38 Days)</p>
       </div>


      <h3 class="text-2xl">A furry weekend in Toronto!!</h3>
    </div>
  </div>
  
  <div class="px-5 py-2 bg-cyan-950 text-xl">
    Join us for some Furality Luma Festival Moments shortly!
  </div>

  <div class="px-5 py-2 bg-blue-950 text-xl">
    LCM is currently connecting to 192.168.2.110 (Lynix) ... 
  </div>
  
  <p class="fixed bottom-5 right-5 opacity-80 text-xl text-right">
    This is an unofficial Furality Stream benefiting Furality Inc.<br />
    All donations go towards this goal.
  </p>
  