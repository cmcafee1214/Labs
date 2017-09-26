document.addEventListener('DOMContentLoaded', function() {
    // THE LOOP PROBLEM
    // for (var i = 0; i < 5; i++) {
    //     var btn = document.createElement('button');
    //     btn.innerHTML = 'Click Me!';
    //     btn.addEventListener('click', function () {
    //         console.log('clicked!');
    //         console.log(i);
    //     });
    //     document.body.appendChild(btn);
    // }


    // WRAP OUR CODE IN A FUNCTION
    // function addButton(num) {
    //     var btn = document.createElement('button');
    //     btn.innerHTML = 'Click Me!';
    //     btn.addEventListener('click', function() {
    //         console.log('clicked!');
    //         console.log(num);
    //     });
    //     document.body.appendChild(btn);
    // }
    
    // for (var i = 0; i < 5; i++) {
    //     addButton(i);
    // }


    // USE A CLOSURE
    // function createLogger(num) {
    //     return function() {
    //         console.log('clicked!');
    //         console.log(num);
    //     };
    // }

    // for (var i = 0; i < 5; i++) {
    //     var btn = document.createElement('button');
    //     btn.innerHTML = 'Click Me!';
    //     var logger = createLogger(i);
    //     btn.addEventListener('click', logger);
    //     // btn.addEventListener('click', createLogger(i));
    //     document.body.appendChild(btn);
    // }

    // USE LET
    // for (let i = 0; i < 5; i++) {
    //     var btn = document.createElement('button');
    //     btn.innerHTML = 'Click Me!';
    //     btn.addEventListener('click', function() {
    //         console.log('clicked!');
    //         console.log(i);
    //     });
    //     document.body.appendChild(btn);
    // }

    // 'THIS'
    // var person = {
    //     name: 'John',
    //     sayHello: function() { 
    //         console.log(this.name);
    //     }
    // };
    // person.sayHello();

    // THIS LOGS THE WINDOW
    // function sayHello(name) {
    //     console.log(name);
    //     console.log(this);
    // }
    // sayHello('John');

    //.CALL
    // ADDS AN INVISIBLE 'THIS' BEFORE ALL OTHER FUNCTION PARAMETERS
    // function sayHello(name, age) {
    //     console.log(name);
    //     console.log(age);
    //     console.log(this.toString());
    // }
    // sayHello.call('Jane', 'John', 27);
    // THE FIRST ARGUMENT PASSED INTO THE FUNCTION WILL BE THE VALUE OF 'THIS'

    //.APPLY
    // EXACT SAME AS .CALL
    // function sayHello(name, age) {
    //     console.log(name);
    //     console.log(age);
    //     console.log(this.toString());
    // }
    // sayHello.apply('Jane', ['John', 27]);
    // A LITTLE EASIER TO READ THAN .CALL
    // ACTUAL FUNCTION ARGUMENTS ARE PASSED IN AS AN ARRAY

    //.BIND
    // for (var i = 0; i < 5; i++) {
    //     var btn = document.createElement('button');
    //     btn.innerHTML = 'Click Me!';
    //     btn.addEventListener('click', function() {
    //         console.log('clicked!');
    //         console.log(Number(this));
    //     }.bind(i));
    //     document.body.appendChild(btn);
    // }


    
    //'THIS' IS THE HTML DOCUMENT
    //console.log(this);

})

//'THIS' IS THE BROWSER WINDOW
// console.log(this);

