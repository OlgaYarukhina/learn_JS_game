window.addEventListener('load', function(){ // look 'load event'
    //canvas setup
    const canvas = this.document.getElementById('canv')
    //look 'drawing context'
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;


// look:
// 1. OOP
// 2. Prototypes
// 3. 'syntactical sugar'
// 4. prototype based inheritance
// 5. Encapsulation
// 6. Constructor
// 7. Objects (reference data types)

class InputHandler {

}

class Projectile {

}

class Particle {

}

class Player {
    constructor(game){
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
    }
    update(){
        this.y += this.speedY;
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}

class Enemy {

}

class Layer {

}

class Background {

}

class UI {

}

class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.player = new Player(this);
    }
    update(){
        this.player.update();
    }
    draw(context){
        this.player.draw(context);
    }

}

const game = new Game (canvas.width, canvas.height);

});