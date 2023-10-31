<script>
    export let text, position;
    let ttHeight, ttWidth;

    $: defaultRadius = ttHeight > ttWidth ? 7.5 : 15;
    $: radius = ttHeight / ttWidth;
</script>

<span
    class="tooltip"
    id={position}
    bind:offsetHeight={ttHeight}
    bind:offsetWidth={ttWidth}
    style:border-radius={`${radius * defaultRadius}% / ${defaultRadius}%`}
>
    {text}
</span>
