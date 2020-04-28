<script>
    import Card from './Card.svelte'
    export let post

    let evento="nada"

    const verMas = (e) => {
        alert("Ver mas infromacion")
        evento=e.detail.id
    }
    const favorito = (event) => {
        alert("Ahora es favorito")
        evento=event.detail
    }

</script>

<div class="row mt-3">
    {#each post as item}
    <div class="col-sm-4">
        <Card
                titulo={item.titulo}
                imagen={item.imagen}
                descripcion={item.descripcion}
                on:ver-mas={verMas}
                on:favorito={favorito}/>
    </div>
    {/each}
</div>
<h1>{evento}</h1>