<script>
    export let titulo;
    export let descripcion;
    export let imagen;
</script>

<div class="card" style="width: 18rem;">
    <img src={imagen} alt={titulo} width="100%" height="200">
    <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text">{descripcion}</p>
        <button class="btn btn-primary">Ver mas...</button>
        <button class="btn btn-danger">Favorito</button>

    </div>
</div>