<script lang="ts">
	import { onMount } from 'svelte';
	import { io } from 'socket.io-client';

	// Get Client ID from URL ?id= query
	let clientId: any;

	// Socket.io

	onMount(() => {
		// Get Client ID from URL ?id= query
		const urlParams = new URLSearchParams(window.location.search);
		clientId = urlParams.get('id');

		console.log(clientId);
	});

	let socket: any;
	let isCountdown = false;
	let serverConnected = true;
	let countdownSeconds = 30; // Initial countdown time in seconds
	let duration = 1;
	let intensity = 1;
	let countdownText = ''; // Display text for countdown

	onMount(() => {
		socket = io('ws://23.247.168.17:28555', { transports: ['websocket'] });
		socket.on('connect', () => {
			console.log('Connected to server');
			serverConnected = true;
		});

		socket.on('authenticated', () => {
			console.log('Authenticated');
		});

		// Send an initial message with a random client ID
		const randomClientKey = Array.from({ length: 32 }, () => Math.random().toString(36)[2]).join(
			''
		);

		const keyElement = document.getElementById('key');
		if (keyElement) {
			keyElement.innerHTML = randomClientKey;
		}

		const initialMessage = {
			id: randomClientKey,
			key: '88VyeXQRmjjNgTJUijAsxxtSw1mtaDDr', // API
			client_type: 'web'
		};
		socket.emit('authentication', initialMessage);
	});

	const vibrate = () => {
		// Send Vibrate command
		let vibrateCommand = {
    		id: clientId,
    		command: { action: "Vibrate", "intensity": intensity, "duration": duration }
		}

		socket.emit('message', vibrateCommand);
	};


	/* Shock Function */
	const shock = () => {
		if (isCountdown) {
			let countdown = countdownSeconds;
			const interval = setInterval(() => {
				countdown--;
				countdownText = `Shocking in ${countdown} seconds!`;

				// Send Vibrate command
				let vibrateCommand = {
    				id: clientId,
    				command: { action: "Vibrate", "intensity": 99, "duration": 1 }
				}

				socket.emit('message', vibrateCommand);

				if (countdown <= 0) {
					
					// Delay Shock Command for 2 seconds
					setTimeout(() => {
						let shockCommand = {
							id: clientId,
							command: { action: "Shock", "intensity": intensity, "duration": duration }
						}

						socket.emit('message', shockCommand);

						console.warn('Sending shock command');
					}, 1500);


					clearInterval(interval);
					//socket?.send('shock');

					countdownText = ''; // Reset countdown text
				}
			}, 1000);
		} else {
			let shockCommand = {
    			id: clientId,
    			command: { action: "Shock", "intensity": intensity, "duration": duration }
			}

			socket.emit('message', shockCommand);
		}
	};
</script>

<div class="min-h-screen p-5">
	{#if clientId}
	<h1 class="text-4xl text-cyan-500">LynxVR Shock</h1>
	{#if serverConnected}
		<p>
			<span class="connected">Connected</span><br />
			Shockers Connected: 1<br />
		</p>
		<br />

		<label>
			Mode :
			<select>
				<option value="1">Normal</option>
				<option value="2">Intense</option>
			</select>
		</label>

		<br /><br />

		<label>
			Intensity 0-200% :
			<input type="number" bind:value={intensity} />
		</label>
		<br /><br />
		<label>
			Duration in seconds :
			<input type="number" bind:value={duration} />
		</label>
		<br /><br />

		<hr />

		<br /><br />

		<!-- Countdown before sending command -->
		<label>
			<input type="checkbox" bind:checked={isCountdown} />
			Countdown before sending command (Will vibrate)
		</label>

		<br /><br />

		<label>
			Countdown time in seconds:
			<input type="number" bind:value={countdownSeconds} />
		</label>

		<br /><br />

		<!-- Display countdown text -->
		{#if countdownText}
			<p style="font-size:20px;color:#ef4444;">{countdownText}</p>
		{/if}
		<br />

		<button class="btn btn-primary" on:click={shock}>Shock</button>
		<button class="btn btn-primary" on:click={vibrate}>Vibrate</button>
	{:else}
		<p>Server Not Connected!</p>
	{/if}
	{:else}
	<p class="text-4xl text-cyan-500">Access Denied!<br/><span class="text-lg text-white">Verify your client ID!</span></p>
	{/if}
</div>

<style>

	hr {
		border: rgb(85, 85, 85) 1px solid;
	}

	p {
		margin-top: 5px;
	}

	label {
		color: white;
		margin-top: 5px;
		font-size: 18px;
	}

	input[type='number'],
	select {
		width: 100px;
		padding: 5px 5px;
		margin: 8px 0;
		box-sizing: border-box;
		font-family: Cyber, sans-serif;
		font-weight: 700;
		background-color: #202020;
		border: none;
		color: white;
	}

	button {
		all: unset;
		background: #0ea5e9;
		color: #111111;
		padding: 0.5rem 1rem;
		font-weight: 700;
		font-size: 18px;
	}

	button:hover {
		background: #0284c7;
	}

	.connected {
		color: green;
	}

	.disconnected {
		color: red;
	}

	.container {
		padding: 3rem;
	}
</style>
