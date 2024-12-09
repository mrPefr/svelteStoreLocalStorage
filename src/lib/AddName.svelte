<script>

    import {names} from "../store";

    let name = ""

    function add(){

        names.update(prev=>[name, ...prev]);

    }

</script>


<input type="text" bind:value={name}>
<h3>{name}</h3>
<button onclick={add}>Add Name</button>
