<script>
    import Colorbutton from "./Colorbutton.svelte";
</script>

<style>
    #div1{
        margin: auto;
        border: solid;
        overflow: hidden;
        background-color: lightblue;
        width: 800px;
        height: 400px;
    }
</style>


<div id="div1">
    <p class="text-center p-3">Click on Red</p>
    <div class="grid grid-cols-4 gap-4" >
        <Colorbutton buttontext="black" buttonbg="yellow" parameter="val3"/>
        <Colorbutton />
        <Colorbutton />
        <Colorbutton />
    </div>
   
    
</div>