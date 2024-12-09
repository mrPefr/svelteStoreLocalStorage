<script>

    import AddName from "./lib/AddName.svelte";
import Counter from "./lib/Counter.svelte";
    import ShowCount from "./lib/ShowCount.svelte";
import {names} from "./store";

</script>



<h2>Counter</h2>
<Counter/>
<ShowCount></ShowCount>
<AddName></AddName>
<pre>

  {JSON.stringify($names, null, 2)}

</pre>