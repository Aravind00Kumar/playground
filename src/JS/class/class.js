(function () {

    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }

    var emp = new Employee(1, "foo");
    console.log("emp is : " + emp.id + ", " + emp.name);
    console.log('is emp instanceof Employee ? ' + (emp instanceof Employee));

    var object = {};
    object.__proto__ = Employee.prototype;
    object.constructor(2, "bar");
    console.log('is object instanceof Employee ? ' + (object instanceof Employee));


    var object2 = Object.create(Employee.prototype);
    object2.constructor(1, "k");
    console.log('is object2 instanceof Employee ? ' + (object2 instanceof Employee));


    var context = "ALIASED LOG:"
    var logalias;

    if (console.log.bind === 'undefined') { // IE < 10
        logalias = Function.prototype.bind.call(console.log, console, context);
    }
    else {
        logalias = console.log.bind(console, context);
    }

    logalias('Hello, world!');

})();