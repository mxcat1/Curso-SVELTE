<script>
    import Header from './Design/Header.svelte'
    import CardGrid from './Post/CardGrid.svelte'
    import InputCustom from './Design/InputCustom.svelte'
    import Jumbotron from './Design/Jumbotron.svelte'

    let color = "warning";

    let titulo=""
    let descripcion=""
    let imagen=""

    let post = [
        {
            id: '1',
            titulo: 'Trabajando con Svelte',
            descripcion: 'Realizando el curso de Svelte temprano por la mañana',
            imagen: 'https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg'
        },
        {
            id: '2',
            titulo: 'Trabajando con vue',
            descripcion: 'Realizando el curso de Svelte temprano por la tarde',
            imagen: 'https://cdn.pixabay.com/photo/2019/12/11/16/20/parsley-4688651_960_720.jpg'
        },
        {
            id: '3',
            titulo: 'Trabajando con angular',
            descripcion: 'Realizando el curso de Svelte temprano por la noche',
            imagen: 'https://cdn.pixabay.com/photo/2020/04/12/10/37/sunset-5033708_960_720.jpg'
        }
    ];
    const agregarPost=()=>{
        const nuevoPost={
            id:Math.floor(Math.random()*(1-100)+1),
            titulo:titulo,
            descripcion:descripcion,
            imagen:imagen,
        }
        post=[nuevoPost,...post]
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>

<Header {color} titulo="Componente 1"/>
<div class="container">
    <Jumbotron nombre="Mi Contenido" let:mostrar={mostrar}>
        <span slot="subtitulo">
            Curso de svelte
        </span>
        <span slot="contenido">
            Guia para el curso de svelte
        </span>
        <h2 slot="subcontenido">
            SUBGuia para el contenido 2
        </h2>
<!--        Tomar Mucho encuenta los eventos en slot-->
<!--        La parte de clss:mostrar no es necesario solo seria para mostrart un clase segun la variable de finida en el jumbotron-->
        <div slot="muestra" class:mostrar>
            {#if mostrar}
                <hr>
                <button class="btn btn-danger">Boton</button>
            {:else}
                <h2>Coloca el mosue encima</h2>
            {/if}
        </div>

    </Jumbotron>

    <CardGrid {post}/>
    <form on:submit|preventDefault={agregarPost}>
<!--        <input type="text" name="txtTitulo" id="txtTitulo" placeholder="Titulo" bind:value={titulo}>-->
<!--        <input type="text" name="txtDescripcion" id="txtDescripcion" placeholder="Descripcion" bind:value={descripcion}>-->
<!--        <input type="text" name="txtImagen" id="txtImagen" placeholder="Imagen" bind:value={imagen}>-->
        <InputCustom type="text" id="txtTitulo" nombre="Titulo" placeholder="Titulo" value={titulo} on:input = {event => (titulo=event.target.value)}/>
        <InputCustom type="text" id="txtImagen" nombre="Imagen" placeholder="Imagen" value={imagen} on:input = {event => (imagen=event.target.value)}/>
        <InputCustom control="textarea" id="txtaDescripcion" nombre="Descripcion" placeholder="Descripcion" value={descripcion} on:input = {event => (descripcion=event.target.value)}/>
        <button class="btn btn-info" type="submit">Guardar</button>
    </form>
</div>