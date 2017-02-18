function Street(position, context) {
    if (!(this instanceof Street)) {
        return new Street(position, context);
    }

    this.context = context;
    this.position = position;
    this.velocity = Vector(-3, 0);
    this.color1 = 'black';
    this.lines = [];

    this.backgound = Rectangle(Vector(this.position.x, this.position.y), window.innerWidth, 200, true, 'gray', false, 'none', 0, this.context);

    for (var index = 0; index < window.innerWidth; index += randomBtween(100, 150)) {
        let line = Rectangle(Vector(this.position.x + index, this.position.y + 100), randomBtween(60, 100), 10, true, 'white', false, 'none', 0, this.context);
        this.lines.push(line);
    }
}

Street.prototype.update = function () {
    this.render();
    // this.position.add(this.velocity);
    this.lines.forEach(function (line) {

        if (line.position.x < -80) {
            line.position.x = window.innerWidth;
        }

        line.position.add(this.velocity);
        line.update();
    }, this);
}

Street.prototype.render = function () {
    this.backgound.render();
}