<script>
    let score = 0;
    let winningColor = "red";
    let buttonColor = [];

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
        winningColor = colorList[Math.floor(Math.random() * colorList.length)];
        let availableColors = colorList.slice();
        for (let i = 0; i < 8; i++) {
            let randNumber = Math.floor(Math.random() * availableColors.length);
            buttonColor[i] = availableColors[randNumber];
            availableColors.splice(randNumber, 1);
        }
    }
    function checkWin(clickedColor) {
        if (clickedColor == winningColor) {
            score += 1;
            setColor();
        } else {
            alert("wrong color, you lost :(");
            score = 0;
            setColor();
        }
    }
    setColor();
</script>

<div id="div1" class="grid bg-white">
    <div
        class="w-1/3 place-self-center p-8 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r grid from-teal-400 to-blue-700"
    >
        <div class="bg-white rounded-2xl mx-20 mb-8 py-8">
            <p
                class="font-sans font-bold text-3xl pb-4 text-gray-400 text-center capitalize"
            >
                Click on <span class="text-{winningColor}-500">
                    {winningColor}
                </span>
            </p>
            <p class="font-sans text-lg font-bold text-gray-400 text-center">
                Score: {score}
            </p>
        </div>

        <div class="grid grid-cols-2 gap-4 ">
            <button
                class="bg-{buttonColor[0]}-500 hover:bg-{buttonColor[0]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[0])}
            >
                {buttonColor[0]}
            </button>
            <button
                class="bg-{buttonColor[1]}-500 hover:bg-{buttonColor[1]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[1])}
            >
                {buttonColor[1]}
            </button>
            <button
                class="bg-{buttonColor[2]}-500 hover:bg-{buttonColor[2]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[2])}
            >
                {buttonColor[2]}
            </button>
            <button
                class="bg-{buttonColor[3]}-500 hover:bg-{buttonColor[3]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[3])}
            >
                {buttonColor[3]}
            </button>
            <button
                class="bg-{buttonColor[4]}-500 hover:bg-{buttonColor[4]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[4])}
            >
                {buttonColor[4]}
            </button>
            <button
                class="bg-{buttonColor[5]}-500 hover:bg-{buttonColor[5]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[5])}
            >
                {buttonColor[5]}
            </button>
            <button
                class="bg-{buttonColor[6]}-500 hover:bg-{buttonColor[6]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[6])}
            >
                {buttonColor[6]}
            </button>
            <button
                class="bg-{buttonColor[7]}-500 hover:bg-{buttonColor[7]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColor[7])}
            >
                {buttonColor[7]}
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
