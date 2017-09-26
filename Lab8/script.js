var inputSquareSide = document.getElementById('input-square-side');
var inputRectangleWidth = document.getElementById('input-rect-width');
var inputRectangleHeight = document.getElementById('input-rect-height');
var inputTriangleHeight = document.getElementById('input-tri-height');
var inputCircleRadius = document.getElementById('input-circ-radius');

var shapeNameLabel = document.getElementById('shape-name');
var shapeWidthLabel = document.getElementById('shape-width');
var shapeHeightLabel = document.getElementById('shape-height');
var shapeRadiusLabel = document.getElementById('shape-radius');
var shapeAreaLabel = document.getElementById('shape-area');
var shapePerimeterLabel = document.getElementById('shape-perimeter');

document.getElementById('circle-btn').addEventListener('click', createCircle);

function createCircle() {
    var inputRadius = inputCircleRadius.value;
    new Circle(inputRadius);
};


var Shape = function (width, height) {
    this.width = width;
    this.height = height;
};

Shape.prototype.allShapes = function () {

};

Shape.prototype.draw = function () {
    this.div = document.createElement('div');
    this.div.className = 'shape ' + this.cssClass;

    var x = Math.floor(Math.random() * (600 - this.width));
    var y = Math.floor(Math.random() * (600 - this.height));

    this.div.style.top = y + 'px';
    this.div.style.left = x + 'px';
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.height + 'px';

    this.div.addEventListener('click', this.describe.bind(this));
    this.div.addEventListener('dblclick', function () {
        this.div.remove();
    }.bind(this));

    canvas.appendChild(this.div);
};
Shape.prototype.describe = function () {
    shapeNameLabel.innerText = this.constructor.name;
    shapeWidthLabel.innerText = this.width;
    shapeHeightLabel.innerText = this.height;
    shapeRadiusLabel.innerText = this.radius;
    shapeAreaLabel.innerText = this.area();
    shapePerimeterLabel.innerText = this.perimeter();
};


function Circle(radius) {
    Shape.call(this, 2 * radius, 2 * radius);
    this.radius = radius;
    this.cssClass = 'circle';
    this.draw();
};

Circle.prototype = Object.create(Circle.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
};

var Triangle = function (height) {
    Shape.call(this, height);
    this.height = height;
};

Triangle.prototype = Object.create(Triangle.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function(){
    return 0.5 * this.height * this.height;
};

Triangle.prototype.perimeter = function(){
    return 2 * this.height + Math.sqrt(2 * Math.pow(this.height, 2));
};

var Rectangle = function (width, height) {
    Shape.call(this, width, height);
    this.cssClass = "rectangle";
    this.draw();

};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
    return this.width * this.height;
};
Rectangle.prototype.area = function(){
    return 2 * this.width + 2 * this.height;
};

var Square = function (sideLength) {
    Shape.call(this, sideLength);

};

Square.prototype = Object.create(Square.prototype);
Square.prototype.constructor = Square;




