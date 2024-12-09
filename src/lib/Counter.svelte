<script>
  import {count} from "../store";

  function increment (){

    let c = $count +1;
    count.set(c);

  }
</script>

<button onclick={increment}>
  count is {$count}
</button>
