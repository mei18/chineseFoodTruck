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

    this.topColor = '#E3000E';
    this.bottomColor = '#E3000E';
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
    //this.wlpos = Vector(this.position.x + 60, this.position.y + 170);
    this.wheell = Wheel(Vector(this.position.x + 80, this.position.y + 170), this.context);

    //Wheel Right
    //this.wrpos = Vector(this.position.x + 215, this.position.y + 170);
    this.wheelr = Wheel(Vector(this.position.x + 290, this.position.y + 170), this.context);
}

Truck.prototype.update = function () {
    this.position.add(this.velocity);
    this.render();

    this.wheell.update();

    this.wheelr.update();
}

Truck.prototype.render = function () {

    //Decoración de atrás
    let stop = Line(Vector(this.position.x, this.position.y +15), Vector(this.position.x - 32, this.position.y +15), 8, 'round', '#1b2d3d', this.context);
    let stopBg = Line(Vector(this.position.x, this.position.y + 12), Vector(this.position.x, this.position.y + 20), 8, 'round', '#1b2d3d', this.context);
    let lineBg = Line(Vector(this.position.x -35, this.position.y + 15), Vector(this.position.x -35, this.position.y + 105), 2, 'round', '#1b2d3d', this.context);
    let topRed = Line(Vector(this.position.x -40, this.position.y + 50), Vector(this.position.x -30, this.position.y + 50), 5, 'round', '#CF000F', this.context);
    //Calentador de arriba.
    let hline = Line(Vector(this.position.x + 33, this.position.y), Vector(this.position.x + 65, this.position.y), 34, 'round', 'black', this.context);
    hline = Line(Vector(this.position.x + 30, this.position.y - 10), Vector(this.position.x + 32, this.position.y - 5), 4, 'round', this.color1, this.context);
    hline = Line(Vector(this.position.x + 36, this.position.y - 10), Vector(this.position.x + 38, this.position.y - 5), 4, 'round', this.color1, this.context);
    hline = Line(Vector(this.position.x + 42, this.position.y - 10), Vector(this.position.x + 44, this.position.y - 5), 4, 'round', this.color1, this.context);

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

    //Dibujar comida
    //fideos
    let chUpR = Line(Vector(this.position.x - 10, this.position.y -120), Vector(this.position.x +80, this.position.y -70), 7, 'round', this.bottomColor, this.context);
    let chUpB = Line(Vector(this.position.x - 2, this.position.y -116), Vector(this.position.x +27, this.position.y -99), 7, 'round', "black", this.context);

    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.arc(this.position.x + 120, this.position.y -50, 47, 3.2, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 120, this.position.y -75, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 130, this.position.y -90, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 100, this.position.y -70, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 150, this.position.y -70, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 110, this.position.y -85, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 95, this.position.y -85, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 88, this.position.y -72, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 140, this.position.y -80, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    this.context.strokeStyle = "#DC9855";
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 135, this.position.y -70, 2, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.stroke();

    let chDwR = Line(Vector(this.position.x - 20, this.position.y -90), Vector(this.position.x +80, this.position.y -60), 7, 'round', this.bottomColor, this.context);
    let chDwB = Line(Vector(this.position.x - 10, this.position.y -87), Vector(this.position.x +20, this.position.y -78), 7, 'round', "black", this.context);

    this.context.fillStyle = '#00587A';
    this.context.beginPath();
    this.context.arc(this.position.x + 120, this.position.y -63, 58, 0, Math.PI, false);
    this.context.closePath();
    this.context.fill();

    let plateBase = RoundRect(Vector(this.position.x + 100, this.position.y -07), 38, 10, 5, this.color1, this.context);
    //dim sum
    this.context.strokeStyle = '#DC9855';
    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.position.x + 208, this.position.y -50, 18, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    this.context.strokeStyle = '#DC9855';
    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.arc(this.position.x + 260, this.position.y -50, 18, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    this.context.strokeStyle = '#DC9855';
    this.context.fillStyle = this.color3;
    this.context.beginPath();
    this.context.arc(this.position.x + 233, this.position.y -50, 18, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

    let face = RoundRect(Vector(this.position.x + 190, this.position.y -40), 90, 40, 5, "#D9983E", this.context);
    this.context.strokeStyle = '#985004';
    this.context.beginPath();
    this.context.lineWidth = 9;
    this.context.moveTo(this.position.x +190, this.position.y - 40);
    this.context.bezierCurveTo(this.position.x + 230, this.position.y - 35, this.position.x + 220, this.position.y - 32, this.position.x + 278, this.position.y -40);
    this.context.stroke();
    let base = RoundRect(Vector(this.position.x + 187, this.position.y -10), 97, 12, 7, "#985004", this.context);






    //Llanta o covertor de la llanta trasera
    let backTire = Line(Vector(this.position.x, this.position.y + 95), Vector(this.position.x, this.position.y + 130), 25, 'round', '#FEC606', this.context);
    //Calle
    this.context.beginPath();
    this.context.fillStyle = this.windowColor;
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.rect(this.position.x - 200, this.position.y + 150, 3005, 350);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    //Parte de la carroseria superior
    this.context.fillStyle = this.topColor;
    this.context.beginPath();
    this.context.moveTo(this.position.x + 90, this.position.y);
    this.context.lineTo(this.position.x + this.truckWidth - 90, this.position.y);
    this.context.quadraticCurveTo(this.position.x + this.truckWidth + 80, this.position.y, this.position.x + this.truckWidth +70, this.position.y + 10);
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
    let salesWindowBottom = RoundRect(Vector(this.position.x + 15, this.position.y + 85), 160, 15, 5, this.color1, this.context);

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

    this.context.beginPath();
    this.context.fillStyle = this.color2;
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.rect(this.position.x -80, this.position.y + 230, 300, 10);
    this.context.rect(this.position.x -80, this.position.y + 250, 300, 10);
    this.context.rect(this.position.x + 400, this.position.y + 230, 300, 10);
    this.context.rect(this.position.x + 400, this.position.y + 250, 300, 10);
    this.context.rect(this.position.x + 900, this.position.y + 230, 300, 10);
    this.context.rect(this.position.x + 900, this.position.y + 250, 300, 10);
    this.context.rect(this.position.x + 1400, this.position.y + 230, 300, 10);
    this.context.rect(this.position.x + 1400, this.position.y + 250, 300, 10);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

}

function ShapePoint(p, cr) {
    if (!(this instanceof ShapePoint)) {
        return new ShapePoint(p, cr);
    }

    this.p = p;
    this.cr = cr;
}
