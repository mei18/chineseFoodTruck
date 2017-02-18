window.addEventListener('load', init, false);

function init() {

    let width = window.innerWidth,
        height = window.innerHeight,
        canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        pool = [];

    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    let image = new Image();   // Create new img element
    image.src = '../img/house1.png'; // Set source path

    image.addEventListener('load', function () {
        // execute drawImage statements here
        let house = House(Vector(100, 370), image, context);
        pool.splice(0, 0, house);
    }, false);


    let image2 = new Image();   // Create new img element
    image2.src = '../img/house1.png'; // Set source path

    image2.addEventListener('load', function () {
        // execute drawImage statements here
        let house = House(Vector(400, 370), image2, context);
        pool.splice(0, 0, house);

    }, false);



    let street = Street(Vector(0, 550), context);
    pool.push(street);

    let truck = Truck(Vector(200, 400), context);
    pool.push(truck);

    function update() {
        context.clearRect(0, 0, width, height);

        pool.forEach(function (object) {
            object.update();
        }, this);

        requestAnimationFrame(update)
    }

    update();


}
