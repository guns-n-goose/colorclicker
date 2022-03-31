<script>
    let bCol = [];
    export function myfunc(para1) {
        setColor();
        //bCol1 = "black";
        alert(para1);
    }
    let colorList = [
        "orange",
        "red",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "gray",
    ];
    function setColor() {
        let availableColors = colorList.slice();
        for (let i = 0; i < 8; i++) {
            let randNumber = Math.floor(Math.random() * availableColors.length);
            bCol[i] = availableColors[randNumber];
            availableColors.splice(randNumber, 1);
        }
        console.log(availableColors);
        console.log(colorList);
    }
    setColor();
</script>

<div id="div1" class="bg-gradient-to-r from-teal-400 to-blue-500">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <p class="font-sans text-lg text-gray-800 text-center">Click on Red</p>
        <div class="grid grid-cols-2 gap-4">
            <button
                class="bg-{bCol[0]}-500 hover:bg-{bCol[0]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[0])}
            >
                {bCol[0]}
            </button>
            <button
                class="bg-{bCol[1]}-500 hover:bg-{bCol[1]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[1])}
            >
                {bCol[1]}
            </button>
            <button
                class="bg-{bCol[2]}-500 hover:bg-{bCol[2]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[2])}
            >
                {bCol[2]}
            </button>
            <button
                class="bg-{bCol[3]}-500 hover:bg-{bCol[3]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[3])}
            >
                {bCol[3]}
            </button>
            <button
                class="bg-{bCol[4]}-500 hover:bg-{bCol[4]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[4])}
            >
                {bCol[4]}
            </button>
            <button
                class="bg-{bCol[5]}-500 hover:bg-{bCol[5]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[5])}
            >
                {bCol[5]}
            </button>
            <button
                class="bg-{bCol[6]}-500 hover:bg-{bCol[6]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[6])}
            >
                {bCol[6]}
            </button>
            <button
                class="bg-{bCol[7]}-500 hover:bg-{bCol[7]}-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => myfunc(bCol[7])}
            >
                {bCol[7]}
            </button>
        </div>
    </div>
</div>

<style>
    #div1 {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
    }
</style>
