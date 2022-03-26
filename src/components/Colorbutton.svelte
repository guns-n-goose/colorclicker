

<button class="bg-{buttonbg}-500 hover:bg-{buttonbg}-700 text-white font-bold py-2 px-4 rounded" on:click={() => myfunc(parameter)}>
{buttontext}
</button>


<script>
    export let buttontext = "red"
    export let buttonbg = "red"
    export let parameter = "val1"
    export function myfunc(para1){
        alert(para1)
        console.log(buttonvalues)
    }
</script>