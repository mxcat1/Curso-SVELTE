<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch=createEventDispatcher()
    export let titulo;
    export let descripcion;
    export let imagen;

    const ver = () => dispatch("ver-mas",{id:123})
    const favorito = () => dispatch("favorito","Hola con dispatch")

</script>

<div class="card" style="width: 18rem;">
    <img src={imagen} alt={titulo} width="100%" height="200">
    <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text">{descripcion}</p>
        <button class="btn btn-primary" on:click={ver}>Ver mas...</button>
        <button class="btn btn-danger" on:click={favorito}>Favorito</button>

    </div>
</div>