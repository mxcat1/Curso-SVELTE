<script>
    import Cargador from '../Componentes/Cargador.svelte'
    import Grid from '../Componentes/Grid.svelte'
    // tarea agregarle paginacion a esta aplicacion

    //a47cfe9dac8628fa1dc279e89f074d2a
    const uri = 'https://api.themoviedb.org/3/movie/popular?api_key=a47cfe9dac8628fa1dc279e89f074d2a&language=es-ES&page=1'
    let promesa= ajax()
    let peliculas = []
    async function ajax() {
        const res = await fetch(uri)
        peliculas = await res.json()
        if (res.ok){
            return peliculas.results
        }else {
            throw new Error('No hay conexion con la api')
        }
    }

</script>

<h1>Peliculas mas populares del momento</h1>
{#await promesa}
    <div align="center"><Cargador/></div>
{:then peliculas}
    <Grid {peliculas}/>
{:catch error}
    <p style="color: red">{error}</p>
{/await}