<script>
	import Navigation from '$lib/Navigation.svelte';
</script>

<svelte:head>
    <title>yalin.io</title>

    <style>
        html {
            background-color: #111111;
        }
    </style>
</svelte:head>

<Navigation/>

<slot></slot>
