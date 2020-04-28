<script>
	import Router from 'svelte-spa-router'
	import { link,push} from 'svelte-spa-router'
	import routes from './routes'

	let nombre = 'Svelte'
	let datosinicio= JSON.stringify([{li:'a'},{li:'b'}])
	// let datosinicio= [1,2,3,4]
	console.log(datosinicio)
	const pagina = () => push('/Acerca/123/Julio/'+datosinicio)

</script>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<span class="navbar-brand" href="#">Svelte rutas</span>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item active">
				<a class="nav-link" href="/" use:link>Inicio </a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/Acerca/123/{nombre}" use:link>Acerca de</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/Contacto" use:link>Contactos</a>
			</li>
		</ul>
	</div>
</nav>
<button class="btn btn-warning" on:click={pagina}>Acerca de</button>

<Router {routes} />