<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let score = 0;
    let winScore = 0;
    let winCoins = 0;
    let winningColor = "red";
    let winningColorText = "red";
    let buttonColorArray = [];

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

    function setColors() {
        let availableColors = colorList.slice();

        let randWinCol = Math.floor(Math.random() * availableColors.length);
        winningColor = availableColors[randWinCol];
        availableColors.splice(randWinCol, 1); // remove color from array -> text and color not same
        winningColorText =
            availableColors[Math.floor(Math.random() * availableColors.length)];

        availableColors = colorList.slice(); // reset available colors
        for (let i = 0; i < 8; i++) {
            let randNumber = Math.floor(Math.random() * availableColors.length);
            buttonColorArray[i] = availableColors[randNumber];
            availableColors.splice(randNumber, 1);
        }
    }
    function checkWin(clickedColor) {
        if (clickedColor == winningColor) {
            score += 1;
            winScore += 1;
            if (winScore >= 5) {
                dispatch("win", { amount: 10 });
                winCoins += 10;
                winScore = 0;
            }
            setColors();
        } else {
            alert("wrong color, you lost 5 coins :(");
            dispatch("lose", { amount: 5 });
            winCoins -= 5;
            score = 0;
            winScore = 0;
            setColors();
        }
    }
    setColors();
</script>

<div id="div1" class="grid">
    <div
        class="w-1/3 place-self-center p-8 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r grid from-teal-400 to-blue-700"
    >
        <div class="bg-white rounded-2xl mx-16 mb-8 py-8">
            <p
                class="font-sans font-bold text-3xl pb-4 text-gray-400 text-center capitalize"
            >
                Click on <span class="text-{winningColor}-500">
                    {winningColorText}
                </span>
            </p>
            <div class="grid grid-cols-2 gap-4 ">
                <p
                    class="font-sans text-lg font-bold text-gray-400 text-center"
                >
                    Score: {score}
                </p>
                <p
                    class="font-sans text-lg font-bold text-gray-400 text-center"
                >
                    Coins: {winCoins}
                </p>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 ">
            <button
                class="bg-{buttonColorArray[0]}-500 hover:bg-{buttonColorArray[0]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[0])}
            >
                {buttonColorArray[0]}
            </button>
            <button
                class="bg-{buttonColorArray[1]}-500 hover:bg-{buttonColorArray[1]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[1])}
            >
                {buttonColorArray[1]}
            </button>
            <button
                class="bg-{buttonColorArray[2]}-500 hover:bg-{buttonColorArray[2]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[2])}
            >
                {buttonColorArray[2]}
            </button>
            <button
                class="bg-{buttonColorArray[3]}-500 hover:bg-{buttonColorArray[3]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[3])}
            >
                {buttonColorArray[3]}
            </button>
            <button
                class="bg-{buttonColorArray[4]}-500 hover:bg-{buttonColorArray[4]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[4])}
            >
                {buttonColorArray[4]}
            </button>
            <button
                class="bg-{buttonColorArray[5]}-500 hover:bg-{buttonColorArray[5]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[5])}
            >
                {buttonColorArray[5]}
            </button>
            <button
                class="bg-{buttonColorArray[6]}-500 hover:bg-{buttonColorArray[6]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[6])}
            >
                {buttonColorArray[6]}
            </button>
            <button
                class="bg-{buttonColorArray[7]}-500 hover:bg-{buttonColorArray[7]}-700 text-white font-bold py-2 px-4 rounded-md"
                on:click={() => checkWin(buttonColorArray[7])}
            >
                {buttonColorArray[7]}
            </button>
        </div>
    </div>
</div>

<style>
    #div1 {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
    }
</style>
