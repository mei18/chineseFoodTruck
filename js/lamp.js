function Lamp(position, context) {
    if (!(this instanceof Lamp)) {
        return new Lamp(position, context);
    }
    this.context = context;
    this.position = position;
    this.color1 = '#FEC606';
    this.angle = 0;
    this.isMovingRight = true;
    this.isMovingLeft = false;
}

Lamp.prototype.update = function () {

    if (this.isMovingRight) {
        if (this.angle > -10) {
            this.angle -= 0.1;
        } else {
            this.isMovingRight = false;
            this.isMovingLeft = true;
        }
    }

    if (this.isMovingLeft) {
        if (this.angle < 10) {
            this.angle += 0.1;
        } else {
            this.isMovingRight = true;
            this.isMovingLeft = false;
        }
    }

    this.render();
}

Lamp.prototype.render = function () {

    this.context.translate(this.position.x -5, this.position.y);
    this.context.rotate(toRadians(this.angle));
    let lineBg = Line(Vector(0, 0), Vector(0, 105), 2, 'round', '#1b2d3d', this.context);
    let topRed = Line(Vector(-10, 50), Vector(10, 50), 5, 'round', '#CF000F', this.context);


    //Dibujar decoracion de atrás
    //Decoracion de atras, rojo, grande
    this.context.beginPath();
    this.context.fillStyle = '#CF000F';
    this.context.ellipse(0, + 70, 28, 18, 0, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();
    //Decoracion de atras, rojo, pequeño
    this.context.beginPath();
    this.context.fillStyle = '#CF000F';
    this.context.ellipse(0,+ 103, 15, 8, 0, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    //Lineas amarillas para los ovalos
    this.context.beginPath();
    this.context.strokeStyle = this.color1;
    this.context.lineWidth = 2;
    this.context.moveTo(0, + 87);
    this.context.bezierCurveTo(+3,+80,+3, +60, 0,+ 55);
    this.context.moveTo( - 10, + 87);
    this.context.bezierCurveTo(- 20, + 75, -15, + 60, -10,  + 55);
    this.context.moveTo(+ 10, + 87);
    this.context.bezierCurveTo(+23, + 75, +17, + 60, +10, + 55);
    this.context.moveTo(0, + 110);
    this.context.bezierCurveTo(+2,+105,+2,+100,0,+95);
    this.context.moveTo(-5,+ 110);
    this.context.bezierCurveTo(-10,+ 105,- 10,+ 100,- 5,+ 96);
    this.context.moveTo(+6,+ 110);
    this.context.bezierCurveTo(+11,+ 105,+11,+ 100,+6,+ 96);
    this.context.stroke();
    this.context.closePath();


    this.context.resetTransform();

}
