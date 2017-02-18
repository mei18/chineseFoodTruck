window.addEventListener('load', init, false);

function init() {

    let canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let truck = Truck(Vector(200,600), context);
    let velocity = Vector(0.1, 0.2);

    function update() {
      truck.update();
      requestAnimationFrame(update)
    }
    update();

    //Calle
    this.context.beginPath();
    this.context.fillStyle = this.windowColor;
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.rect(this.position.x - 200, this.position.y + 150, 3005, 350);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

}
