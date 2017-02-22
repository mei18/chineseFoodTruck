/**
 * Truck
 * Creates small food truck
 * @constructor
 * @param {Vector} position - Defines the position of the circle.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Truck(position, context) {

    if (!(this instanceof Truck)) {
        return new Truck(position, context);
    }

    this.topColor = '#B30802';
    this.bottomColor = '#B30802';
    this.windowColor = '#454545';
    this.color1 = '#FEC606';
    this.color2 = 'white';
    this.color3 = "#F3D89F";
    this.context = context;
    this.position = position;
    this.truckWidth = 230;
    this.angle = 0;
    this.velocity = Vector(0, 0);

    //Wheel Left
    this.wheell = Wheel(Vector(this.position.x + 80, this.position.y + 170), this.context);

    //Wheel Right
    this.wheelr = Wheel(Vector(this.position.x + 290, this.position.y + 170), this.context);
    //Red Lamp
    this.lamp = Lamp(Vector(this.position.x - 30, this.position.y + 15), this.context);
}

Truck.prototype.update = function () {
    //add velocity
    this.position.add(this.velocity);
    this.render();

    this.wheell.update();
    this.wheelr.update();
    this.lamp.update();
}

Truck.prototype.render = function () {
  //Top background
  this.context.beginPath();
  this.context.fillStyle = 'White';
  this.context.globalAlpha = 0.7;
  this.context.moveTo(this.position.x,this.position.y);
  this.context.fillRect(this.position.x - 780,this.position.y - 550,1950,620);
  this.context.globalAlpha = 1.0;
  this.context.fill();
  this.context.closePath();

    //Decoración de atrás
    let stop = Line(Vector(this.position.x, this.position.y + 15), Vector(this.position.x - 32, this.position.y + 15), 8, 'round', '#1b2d3d', this.context);
    let stopBg = Line(Vector(this.position.x, this.position.y + 12), Vector(this.position.x, this.position.y + 20), 8, 'round', '#1b2d3d', this.context);

    //Calentador de arriba.
    let hline = Line(Vector(this.position.x + 33, this.position.y), Vector(this.position.x + 65, this.position.y), 34, 'round', 'White', this.context);
    hline = Line(Vector(this.position.x + 30, this.position.y - 10), Vector(this.position.x + 32, this.position.y - 5), 4, 'round', 'black', this.context);
    hline = Line(Vector(this.position.x + 36, this.position.y - 10), Vector(this.position.x + 38, this.position.y - 5), 4, 'round', 'black', this.context);
    hline = Line(Vector(this.position.x + 42, this.position.y - 10), Vector(this.position.x + 44, this.position.y - 5), 4, 'round', 'black', this.context);

    //Dibujar comida

    //Top Chupsticks
    let chUpR = Line(Vector(this.position.x - 10, this.position.y - 120), Vector(this.position.x + 80, this.position.y - 70), 7, 'round', this.bottomColor, this.context);
    let chUpB = Line(Vector(this.position.x - 2, this.position.y - 116), Vector(this.position.x + 27, this.position.y - 99), 7, 'round', "black", this.context);

    //rice
    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.arc(this.position.x + 120, this.position.y - 50, 47, 3.2, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 120, this.position.y - 75, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 130, this.position.y - 90, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 100, this.position.y - 70, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 150, this.position.y - 70, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 110, this.position.y - 85, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 95, this.position.y - 85, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 88, this.position.y - 72, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 140, this.position.y - 80, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 135, this.position.y - 70, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    //Down Chupsticks
    let chDwR = Line(Vector(this.position.x - 20, this.position.y - 90), Vector(this.position.x + 80, this.position.y - 60), 7, 'round', this.bottomColor, this.context);
    let chDwB = Line(Vector(this.position.x - 10, this.position.y - 87), Vector(this.position.x + 20, this.position.y - 78), 7, 'round', "black", this.context);

    //plate
    this.context.fillStyle = '#199EC7';
    this.context.beginPath();
    this.context.arc(this.position.x + 120, this.position.y - 63, 58, 0, Math.PI, false);
    this.context.closePath();
    this.context.fill();

    let plateBase = RoundRect(Vector(this.position.x + 100, this.position.y - 07), 38, 10, 5, this.color1, this.context);

    //dim sum
    this.context.strokeStyle = '#DC9855';
    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 208, this.position.y - 50, 18, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    this.context.strokeStyle = '#DC9855';
    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.arc(this.position.x + 260, this.position.y - 50, 18, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    this.context.strokeStyle = '#DC9855';
    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.arc(this.position.x + 233, this.position.y - 50, 18, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    let face = RoundRect(Vector(this.position.x + 190, this.position.y - 40), 90, 40, 5, "#D9983E", this.context);
    this.context.strokeStyle = '#985004';
    this.context.beginPath();
    this.context.lineWidth = 9;
    this.context.moveTo(this.position.x + 190, this.position.y - 40);
    this.context.bezierCurveTo(this.position.x + 230, this.position.y - 35, this.position.x + 220, this.position.y - 32, this.position.x + 278, this.position.y - 40);
    this.context.stroke();
    let base = RoundRect(Vector(this.position.x + 187, this.position.y - 10), 97, 12, 7, "#985004", this.context);

    //Llanta o covertor de la llanta trasera
    let backTire = Line(Vector(this.position.x, this.position.y + 95), Vector(this.position.x, this.position.y + 130), 25, 'round', '#FEC606', this.context);

    //Parte de la carroseria superior
    this.context.fillStyle = this.topColor;
    this.context.beginPath();
    this.context.moveTo(this.position.x + 90, this.position.y);
    this.context.lineTo(this.position.x + this.truckWidth - 90, this.position.y);
    this.context.quadraticCurveTo(this.position.x + this.truckWidth + 80, this.position.y, this.position.x + this.truckWidth + 70, this.position.y + 10);
    this.context.lineTo(this.position.x + this.truckWidth + 90, this.position.y + 80);
    this.context.lineTo(this.position.x, this.position.y + 90);
    this.context.lineTo(this.position.x, this.position.y + 10);
    this.context.quadraticCurveTo(this.position.x, this.position.y, this.position.x + 90, this.position.y);
    this.context.fill();
    this.context.closePath();

    //Parte de la carroseria inferior
    this.context.fillStyle = this.bottomColor;
    this.context.beginPath();
    this.context.moveTo(this.position.x + this.truckWidth + 90, this.position.y + 80);
    this.context.lineTo(this.position.x + this.truckWidth + 120, this.position.y + 100);
    this.context.lineTo(this.position.x + this.truckWidth + 125, this.position.y + 170);
    this.context.quadraticCurveTo(this.position.x + this.truckWidth + 35, this.position.y + 170, this.position.x + this.truckWidth + 25, this.position.y + 170);
    this.context.lineTo(this.position.x + 10, this.position.y + 170);
    this.context.quadraticCurveTo(this.position.x, this.position.y + 170, this.position.x, this.position.y + 160);
    this.context.lineTo(this.position.x, this.position.y + 80);
    this.context.fill();
    this.context.closePath();

    //Ventana de ventas
    let salesWindow = RoundRect(Vector(this.position.x + 20, this.position.y + 20), 150, 80, 5, this.windowColor, this.context);

    //Base de la ventana de ventas
    let salesWindowBottom = RoundRect(Vector(this.position.x + 15, this.position.y + 85), 160, 15, 5, "White", this.context);

    //Lineas de negra base el carro
    let line = Line(Vector(this.position.x, this.position.y + 170), Vector(this.position.x + 355, this.position.y + 170), 8, 'round', 'black', this.context);

    //Luz direccional
    let lightBg = Line(Vector(this.position.x + 10, this.position.y + 140), Vector(this.position.x + 20, this.position.y + 140), 12, 'round', 'white', this.context);

    let lightft = Line(Vector(this.position.x + 10, this.position.y + 140), Vector(this.position.x + 20, this.position.y + 140), 4, 'round', 'orange', this.context);

    //Ventan del chofer
    let points = [];
    points.push(ShapePoint(Vector(this.position.x + 293, this.position.y + 10), 10));
    points.push(ShapePoint(Vector(this.position.x + 310, this.position.y + 90), 10));
    points.push(ShapePoint(Vector(this.position.x + 255, this.position.y + 90), 10));
    points.push(ShapePoint(Vector(this.position.x + 255, this.position.y + 10), 10));
    this.context.strokeStyle = this.color2;
    this.context.fillStyle = this.windowColor;
    this.context.beginPath();
    this.context.moveTo(points[0].p.x - points[0].cr, points[0].p.y);
    this.context.quadraticCurveTo(points[0].p.x, points[0].p.y, points[0].p.x, points[0].p.y + points[0].cr);
    this.context.lineTo(points[1].p.x, points[1].p.y - points[1].cr);
    this.context.quadraticCurveTo(points[1].p.x, points[1].p.y, points[1].p.x - points[1].cr, points[1].p.y);
    this.context.lineTo(points[2].p.x + points[2].cr, points[2].p.y);
    this.context.quadraticCurveTo(points[2].p.x, points[2].p.y, points[2].p.x, points[2].p.y - points[2].cr);
    this.context.lineTo(points[3].p.x, points[3].p.y + points[3].cr);
    this.context.quadraticCurveTo(points[3].p.x, points[3].p.y, points[3].p.x + points[3].cr, points[3].p.y);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    //Puerta
    points = [];
    points.push(ShapePoint(Vector(this.position.x + 245, this.position.y + 10), 10));
    points.push(ShapePoint(Vector(this.position.x + 245, this.position.y + 160), 10));
    points.push(ShapePoint(Vector(this.position.x + 190, this.position.y + 160), 10));
    points.push(ShapePoint(Vector(this.position.x + 190, this.position.y + 10), 10));
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.beginPath();
    this.context.moveTo(points[0].p.x - points[0].cr, points[0].p.y);
    this.context.quadraticCurveTo(points[0].p.x, points[0].p.y, points[0].p.x, points[0].p.y + points[0].cr);
    this.context.lineTo(points[1].p.x, points[1].p.y - points[1].cr);
    this.context.quadraticCurveTo(points[1].p.x, points[1].p.y, points[1].p.x - points[1].cr, points[1].p.y);
    this.context.lineTo(points[2].p.x + points[2].cr, points[2].p.y);
    this.context.quadraticCurveTo(points[2].p.x, points[2].p.y, points[2].p.x, points[2].p.y - points[2].cr);
    this.context.lineTo(points[3].p.x, points[3].p.y + points[3].cr);
    this.context.quadraticCurveTo(points[3].p.x, points[3].p.y, points[3].p.x + points[3].cr, points[3].p.y);
    this.context.closePath();
    this.context.stroke();

    //Manilla de puerta
    line = Line(Vector(this.position.x + 200, this.position.y + 100), Vector(this.position.x + 205, this.position.y + 100), 6, 'round', '#FEC606', this.context);

    //Ventanas de puerta
    this.context.beginPath();
    this.context.fillStyle = this.windowColor;
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.rect(this.position.x + 198, this.position.y + 18, 15, 70);
    this.context.rect(this.position.x + 222, this.position.y + 18, 15, 70);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    //Light
    let light1 = Ball(Vector(this.position.x + 335, this.position.y + 110), 10, 'white', this.context);
    let light2 = Ball(Vector(this.position.x + 335, this.position.y + 110), 6, '#f5c132', this.context);

    //Bumper frontal
    let bumperFrontSh = Line(Vector(this.position.x + 349, this.position.y + 159), Vector(this.position.x + 348, this.position.y + 157), 17, 'round', 'rgba(0,0,0,0.25)', this.context);

    let bumperFront = Line(Vector(this.position.x + 350, this.position.y + 155), Vector(this.position.x + 355, this.position.y + 156), 15, 'round', '#d4d9dd', this.context);

    //Bumper trasero
    let bumperBackSh = Line(Vector(this.position.x + 5, this.position.y + 158), Vector(this.position.x + 8, this.position.y + 158), 17, 'round', 'rgba(0,0,0,0.25)', this.context);

    let bumperBack = Line(Vector(this.position.x, this.position.y + 157), Vector(this.position.x + 5, this.position.y + 156), 15, 'round', '#d4d9dd', this.context);

    //Guarda barro izquierdo
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(this.position.x + 80, this.position.y + 170, 35, Math.PI, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();

    //Guarda barro derecho
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(this.position.x + 290, this.position.y + 170, 35, Math.PI, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();

    //Textos
    this.context.font = "20px Merienda One, cursive";
    this.context.fillStyle = "White";
    this.context.fillText("Chinese Food", this.position.x + 30, 645);

    this.context.font = "20px Merienda One, cursive";
    this.context.fillStyle = "White";
    this.context.fillText("中国", this.position.x + 197, 655);

    this.context.font = "50px Shadows Into Light Two, cursive";
    this.context.fillStyle = "#F31D2F";
    this.context.fillText("Food Truck Festival", this.position.x, 100);

    this.context.font = "50px Shadows Into Light Two, cursive";
    this.context.fillStyle = "#F31D2F";
    this.context.fillText("8:00 PM", this.position.x +95, 330);

    this.context.font = "50px Shadows Into Light Two, cursive";
    this.context.fillStyle = "#F31D2F";
    this.context.fillText("Friday,Dic 1", this.position.x + 70, 220);

    this.context.font = "30px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("MENU", this.position.x +120, 800);

    this.menu = Rectangle(Vector(this.position.x - 85, this.position.y +310), 528, 150, false, '#', true, 'White', 3, this.context);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Sweet & sour pork", this.position.x - 70, 880);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Dim Sum", this.position.x - 70, 910);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Chicken+Ginger Oil", this.position.x - 70, 940);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Bubble Tea", this.position.x + 130, 880);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Grass jelly", this.position.x + 130, 910);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Jia Duo Bao", this.position.x + 130, 940);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Sago coconut fruit", this.position.x + 260, 880);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Tan tat", this.position.x + 260, 910);

    this.context.font = "20px Quicksand, sans-serif";
    this.context.fillStyle = "White";
    this.context.fillText("Tangyuan", this.position.x + 260, 940);

}

function ShapePoint(p, cr) {
    if (!(this instanceof ShapePoint)) {
        return new ShapePoint(p, cr);
    }

    this.p = p;
    this.cr = cr;
}
