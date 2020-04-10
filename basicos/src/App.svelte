<script>
	let nombre="";
	let valor1=0;
	let valor2=0;
	let habilitar=false;

	

</script>

<main>

	<h1>DATABINDING</h1>
	<br>
	<p>{nombre}</p>
	<input type="text" name="txtombre" id="txtnombre" bind:value={nombre}>
	<hr>
	<h2>Suma de Dos Valores</h2>
	<label for="rgval1">Valor1</label>
	<input type="range" name="rgval1" id="rgval1" bind:value={valor1}>
	<label for="rgval1">Valor2</label>
	<input type="range" name="rgval2" id="rgval2" bind:value={valor2}>
	<h2>Valor 1 : {valor1} mas el valor 2 : {valor2} es Igual a {valor1+valor2}</h2>
	<hr>
	<label for="chkhabilitar">Habilitar Boton</label>
	<input type="checkbox" name="chkhabilitar" id="chkhabilitar" bind:checked={habilitar}>
	<br>
	<button disabled={!habilitar}>Hola</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>