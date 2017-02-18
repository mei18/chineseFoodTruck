function House(position, img, context) {
    if (!(this instanceof House)) {
        return new House(position, img, context);
    }
    this.velocity = Vector(-0.8, 0);
    this.position = position;
    this.context = context;
    this.img = img;   // Create new img element
}

House.prototype.update = function () {
    this.position.add(this.velocity);
    this.checkBounderies();
    this.render();
}

House.prototype.render = function () {
    this.context.drawImage(this.img, this.position.x, this.position.y, 256, 256);
}

House.prototype.checkBounderies = function () {
    if (this.position.x < -256) {
        this.position.x = window.innerWidth;
    }
}