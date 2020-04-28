<script>
    export let params={}
    params.datos=JSON.parse(unescape(params.datos))
    console.log(params.datos)
</script>
<h1>Pagina de Acerca de</h1>
<h2>Id recibido : {params.id}</h2>
<h2>Nombre recibido : {#if params.nombre}{params.nombre}{/if}</h2>
{#if params.datos}
    {#each params.datos as item}
        <li>{item.li}</li>
    {/each}
{/if}