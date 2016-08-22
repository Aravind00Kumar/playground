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

(function () {

    function TLocation() {
        this.lang = 0;
        this.long = 0;
    }

    Object.__defineGetter__.call(TLocation.prototype, "getLocation", function () { return "lang: " + this.lang + "Long: " + this.long });
    Object.__defineSetter__.call(TLocation.prototype, "setLocation", function (cor) { this.lang = cor.lang, this.long = cor.long });

    var location = new TLocation();

    location.setLocation = {lang:10,long:10}; 
    document.write(location.getLocation);


    function Circle(radius){
        this._radius = radius;
        this.getArea2 = function(){
            return this._radius * Math.PI;
        }
    }

    Circle.prototype = {
        get radius(){return this._radius},
        set radius(radius){this._radius = radius},
        get area(){return Math.PI * this._radius},
        getArea : function(){
            return this._radius * Math.PI;
        }
    }

    var c = new Circle(5);
    document.write(c.area);

    var obj = {
        name:'Aravind'
    }

    function Employee(name){
        this.name = name;
    }

    var emp = new Employee('Kumar');

    var emp2 = {
        name: 'Kumar'
    };
    emp2.__proto__ = Employee.prototype;
    emp2.__proto__.constructor = Employee;

    var emp3 ={};
    emp3.__proto__ = Employee.prototype;
    //emp3.__proto__.constructor = Employee;

    emp3.constructor('Aravind');




    function Person(name){
        this.name = name;
    }

    function Student(rollnumber){
        this.rollnumber = rollnumber;
    }

    function Teacher(empid){
        this.empid = empid;
    }

    Student.prototype = new Person('Aravind');
    //Student.prototype.constructor = Student;

    Teacher.prototype = new Person('Aravind');
    Teacher.prototype.constructor = Teacher;

    var per = new Person('Aravind')
    var std = new Student('101')
    var sir = new Teacher('101')



function Rabbit() { } // (1)
//Rabbit.prototype = {}  // (2)
var rabbit = new Rabbit()
alert( rabbit.constructor == Rabbit ) // true



//    debugger;


})();



})();
