export class GameController{
    constants1={
        height: 400,
        width: 800,
    }


    newGame(){
        this.frame = {
            score: 0,
            width: this.constants1.width,
            height: this.constants1.height,
            gameOver: false,
            gameStarted: false,
        };
        return this.frame;
        
    }
}