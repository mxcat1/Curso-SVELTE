<script>
	let nombre="";
	let valor1=0;
	let valor2=0;
	let habilitar=false;
	let usuarios=["Juan","Pedro","Jose"];
	let persona=[
		{
			"Nombre":"Juan",
			"Ocupacion":"Doctor"
		},
		{
			"Nombre":"Jose",
			"Ocupacion":"Estudiante"
		},
		{
			"Nombre":"Jorge",
			"Ocupacion":"Profesor"
		},
	];
	let promesa = ajax()
	let users = []
	const url = 'https://jsonplaceholder.typicode.com/users'

	function sleep(s){
		return new Promise(res => setTimeout(res,s))
	}
	async function ajax(){
		const res = await fetch(url)
		users = await res.json()
		let data
		await sleep(3000)
		if(res.ok){
			return users
		}else{
			throw new Error('Error al conectar con la api')
		}
	}

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
	<ul>
		{#each usuarios as usuario}
			<li>{usuario}</li>
		{/each}
	</ul>

	<table>
		<tr>
			<th>Nombre</th>
			<th>Ocupacion</th>
		</tr>
		{#each persona as item}
			<tr>
				<td>{item.Nombre}</td>
				<td>{item.Ocupacion}</td>
			</tr>
		{/each}
	</table>

	<hr>
	<h1>BLOQUE AWAIT</h1>
	{#await promesa}
		<p>Cargando api...</p>
	{:then usuarios}
		{#each usuarios as item}
			<li>{item.name}</li>
		{/each}
	{:catch error}
		<p style="color:red;">{error}</p>
	{/await}

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
	table,tr,th,td{
		border:#333333 1px solid;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>