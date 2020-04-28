<script>
    import {onMount} from 'svelte'
    export let params ={}
    let id=params.id

    const uri='https://api.themoviedb.org/3/movie/'
    const key='?api_key=a47cfe9dac8628fa1dc279e89f074d2a&language=es-ES'
    const urlFinal = uri+id+key

    let pelicula ={}
    let generosPelicula=[]

    onMount(async () => {
        const res = await fetch(urlFinal)
        pelicula= await res.json()
        console.log(pelicula)
        generosPelicula = await pelicula.genres
        console.log(generosPelicula)
    })

</script>

<div class="row mt-5">
    <div class="col-lg-6">
        <img src="https://image.tmdb.org/t/p/w500{pelicula.poster_path}" alt="{pelicula.title}" width="100%" height="700">
    </div>
    <div class="col-lg-6">
        <h1>{pelicula.title}</h1>
        <p>{pelicula.overview}</p>
        {#each generosPelicula as genero}
            <h4>{genero.name}</h4>
        {/each}
        <div class="rating" align="center">
            {pelicula.vote_average}
        </div>
    </div>
</div>
<style>
    .rating{
        width: 300px;
        border: solid 4px black;
        font-size: 10rem;
        font-weight: bolder;
    }
</style>