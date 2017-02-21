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
    image.src = '../img/EDF1.png'; // Set source path

    image.addEventListener('load', function () {
        // execute drawImage statements here
        let house = House(Vector(100, 200), image, context);
        pool.splice(0, 0, house);
    }, false);


    let image2 = new Image();   // Create new img element
    image2.src = '../img/EDF2.png'; // Set source path

    image2.addEventListener('load', function () {
        // execute drawImage statements here
        let house = House(Vector(1500, 190), image2, context);
        pool.splice(0, 0, house);

    }, false);

    let image3 = new Image();   // Create new img element
    image3.src = '../img/EDF3.png'; // Set source path

    image3.addEventListener('load', function () {
        // execute drawImage statements here
        let house = House(Vector(800, 200), image3, context);
        pool.splice(0, 0, house);

    }, false);




    let street = Street(Vector(0, 600), context);
    pool.push(street);

    let truck = Truck(Vector(200, 600), context);
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
