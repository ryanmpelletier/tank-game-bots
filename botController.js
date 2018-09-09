
class BotLogic {
    constructor(){
        this.keyPressedChangeTime = new Date().getTime();
        this.lastMouseClickedTime = new Date().getTime();
        this.mouseAngleIncrementTime = new Date().getTime();
        this.mouseAngle = 0;
        this.keyPressedIndex = 1;
        this.mouseClicked = false;
        this.keyIndices = ['KEY_SPACE', 'KEY_LEFT', 'KEY_UP', 'KEY_RIGHT', 'KEY_DOWN'];
        this.keysPressed = {
            'KEY_SPACE': false,
            'KEY_LEFT': false,
            'KEY_UP': false,
            'KEY_RIGHT': false,
            'KEY_DOWN':false
        };
    }

    getBotInput(){
        //possibly update the key being pressed
        if(new Date().getTime() - this.keyPressedChangeTime > 3000){
            this.keyPressedChangeTime = new Date().getTime();
            this.keyPressedIndex = (this.keyPressedIndex + 1) % 5;
        }

        for(var key of Object.keys(this.keysPressed)){
            if(this.keysPressed.hasOwnProperty(key)){
                this.keysPressed[key] = (this.keyIndices[this.keyPressedIndex] == key);
            }
        }

        if(this.mouseClicked == false && (new Date().getTime() - this.lastMouseClickedTime >  1500)){
            this.mouseClicked = true;
            this.lastMouseClickedTime = new Date().getTime();
        }else{
            this.mouseClicked = false;
        }

        if(new Date().getTime() - this.mouseAngleIncrementTime > 1000){
            this.mouseAngle = this.mouseAngle + 1 % (2 * Math.PI);
            this.mouseAngleIncrementTime = new Date().getTime();
        }

        //I need a class with high level functions that can give me back this object
        return {
            keysPressed: this.keysPressed,
            mouseClicked:this.mouseClicked,
            mouseAngle: this.mouseAngle
        };
    }

    moveUp(boost) {
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': false,
            'KEY_UP': true,
            'KEY_RIGHT': false,
            'KEY_DOWN':false
        };
    }

    moveUpRight(boost) {
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': false,
            'KEY_UP': true,
            'KEY_RIGHT': true,
            'KEY_DOWN': false
        };
    }

    moveRight(boost) {
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': false,
            'KEY_UP': false,
            'KEY_RIGHT': true,
            'KEY_DOWN': false
        };
    }

    moveDownRight(boost) {
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': false,
            'KEY_UP': false,
            'KEY_RIGHT': true,
            'KEY_DOWN': true
        };
    }

    moveDown(boost){
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': false,
            'KEY_UP': false,
            'KEY_RIGHT': false,
            'KEY_DOWN':true
        };
    }

    moveDownLeft(boost){
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': true,
            'KEY_UP': false,
            'KEY_RIGHT': false,
            'KEY_DOWN':true
        };
    }

    moveLeft(boost) {
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': true,
            'KEY_UP': false,
            'KEY_RIGHT': false,
            'KEY_DOWN': false
        };
    }

    moveUpLeft(boost) {
        return {
            'KEY_SPACE': boost,
            'KEY_LEFT': true,
            'KEY_UP': true,
            'KEY_RIGHT': false,
            'KEY_DOWN': false
        };
    }

}

module.exports = BotLogic;