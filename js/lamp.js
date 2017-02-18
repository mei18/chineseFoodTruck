function Lamp(position, context) {
    if (!(this instanceof Lamp)) {
        return new Lamp(position, context);
    }
    this.context = context;
    this.position = position;
    this.color1 = 'black';
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

    this.context.translate(this.position.x, this.position.y);
    this.context.rotate(toRadians(this.angle));
    let lineBg = Line(Vector(0, 0), Vector(0, 105), 2, 'round', '#1b2d3d', this.context);
    let topRed = Line(Vector(-10, 50), Vector(10, 50), 5, 'round', '#CF000F', this.context);

    /*
        //Dibujar decoracion de atrás
        //Decoracion de atras, rojo, grande
        this.context.beginPath();
        this.context.fillStyle = '#CF000F';
        this.context.ellipse(this.position.x - 35, this.position.y + 70, 28, 18, 0, 0, Math.PI * 2, true);
        this.context.fill();
        this.context.closePath();
        //Decoracion de atras, rojo, pequeño
        this.context.beginPath();
        this.context.fillStyle = '#CF000F';
        this.context.ellipse(this.position.x - 35, this.position.y + 103, 15, 8, 0, 0, Math.PI * 2, true);
        this.context.fill();
        this.context.closePath();
    
        //Lineas amarillas para los ovalos
        this.context.beginPath();
        this.context.strokeStyle = this.color1;
        this.context.lineWidth = 2;
        this.context.moveTo(this.position.x - 23, this.position.y + 85);
        this.context.bezierCurveTo(this.position.x - 20, this.position.y + 83, this.position.x - 10, this.position.y + 68, this.position.x - 23, this.position.y + 55);
        this.context.moveTo(this.position.x - 35, this.position.y + 87);
        this.context.bezierCurveTo(this.position.x - 35, this.position.y + 78, this.position.x - 29, this.position.y + 80, this.position.x - 35, this.position.y + 55);
        this.context.moveTo(this.position.x - 45, this.position.y + 86);
        this.context.bezierCurveTo(this.position.x - 48, this.position.y + 80, this.position.x - 55, this.position.y + 70, this.position.x - 45, this.position.y + 54);
        this.context.moveTo(this.position.x - 28, this.position.y + 110);
        this.context.bezierCurveTo(this.position.x - 30, this.position.y + 110, this.position.x - 22, this.position.y + 104, this.position.x - 28, this.position.y + 97);
        this.context.moveTo(this.position.x - 35, this.position.y + 110);
        this.context.bezierCurveTo(this.position.x - 38, this.position.y + 110, this.position.x - 32, this.position.y + 110, this.position.x - 35, this.position.y + 96);
        this.context.moveTo(this.position.x - 42, this.position.y + 110);
        this.context.bezierCurveTo(this.position.x - 43, this.position.y + 107, this.position.x - 47, this.position.y + 105, this.position.x - 42, this.position.y + 97);
        this.context.stroke();
        this.context.closePath();
        */

    this.context.resetTransform();

}