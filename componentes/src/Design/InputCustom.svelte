<script>
    export let control = ""
    export let value
    export let placeholder
    export let type = ""
    export let nombre
    export let id
</script>

<div class="form-group">
    <label {id}>{nombre}</label>
    {#if control ==='textarea'}
        <textarea {id} {placeholder} rows="5" {value} on:input class="form-control"></textarea>
    {:else}
        <input {type} class="form-control" {id} {placeholder} {value} on:input>
    {/if}
</div>