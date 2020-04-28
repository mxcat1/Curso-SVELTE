<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte'

    export let nombre
    let mostrar

    const entrar = () => mostrar=true
    const salir = () => mostrar=false


    // creacion
    // scripts
    console.log('Se ejecuta primero scripts')
    // onMount
    onMount(async ()=>{
        console.log('Se ejecuta en tercer lugar')
        await tick()
        console.log('Se ejecuta cuando todos los metodos ya se ejecutaron')
    })
    // onDestroy
    onDestroy(()=>{
        console.log('Se ejecuta cuando se elimina el componente')
    })

    // actualizacion del dom
    // beforeUpdate
    beforeUpdate(()=>{
        console.log('Se ejecuta antes de actualizar el dom')
    })
    // afterUpdate
    afterUpdate(()=>{
        console.log('Se ejecuta despues de actualizar el dom')
    })
    // tick

</script>
<style>
    h2{
        color: red;
        font-weight: bolder;
    }
    p{
        color: blue;
        font-weight: bold;
        font-style: italic;
        text-decoration: underline;
    }
    .subguia{
        color: #666666;
        font-style: italic;
    }
</style>
<div class="jumbotron mt-4">
    <h1>{nombre}</h1>
    <h2>
        <slot name="subtitulo">
            <p>Aqui debe haber un subtitulo</p>
        </slot>
    </h2>
    <p>
        <slot name="contenido">
            <span>Aqui debe haber contenido</span>
        </slot>
    </p>
    <div class="subguia">
        <slot name="subcontenido">
            <p>SUB CONTENIDO DE UN TEMA</p>
        </slot>
    </div>
    <section on:mouseenter={entrar} on:mouseleave={salir}>
        <slot name="muestra" mostrar={mostrar}>
            algo
        </slot>
    </section>

</div>