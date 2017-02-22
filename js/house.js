function House(position, img, context) {
    if (!(this instanceof House)) {
        return new House(position, img, context);
    }
    this.velocity = Vector(-0.9, 0);
    this.position = position;
    this.context = context;
    this.img = img;   // Create new img element
}

House.prototype.update = function () {
    // agregar la velocidad
    this.position.add(this.velocity);
    this.checkBounderies();
    this.render();
}

House.prototype.render = function () {
    this.context.drawImage(this.img, this.position.x, this.position.y, 500, 500);
}

House.prototype.checkBounderies = function () {
    //toma el ancho de la imagen y lo devuelve
    if (this.position.x < -500) {
        this.position.x = window.innerWidth;
    }
}
