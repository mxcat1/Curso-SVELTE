<script>
    import Card from './Card.svelte'
    export let post
</script>

<div class="row mt-3">
    {#each post as item}
    <div class="col-sm-4">
        <Card titulo={item.titulo} imagen={item.imagen} descripcion={item.descripcion}/>
    </div>
    {/each}
</div>