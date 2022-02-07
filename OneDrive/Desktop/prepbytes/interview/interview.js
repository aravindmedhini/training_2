// console.log("hello Aravind")

// what are the data types in JS ?

                // we are catagorised the datatypes into two ways 

                // 1 primitive 
                //     String
                //     Number
                //     NaN
                //     undifined
                //     Boolean
                //     null
                // 2 Non primitive 
                //     objects 
                //     arrays

                //     in js arrays also known as objects9k        
                    // console.log(typeof []);

// what is hoisting in js ?

                // it is basically a process in which variables and functions get memory allocated as undefined 

                // var is a global scopic variable its value will be undefined in local scope 
                // where let and const variables are undefined in local scope 

                // hoisting suggests that always initilise variables othervise it refelcts reference error


// difference between == and === operators ?

                // both does that comparision of data assigned to the variables and gives boolean values

                //  == it compares only the data assigned to the variables irrespective of data Types
                
                //  === It compares the data as well as data types too


// is java script is dynamicall typed or statically typed language ?

                    //    java Script is a dynamically typed language because initially we can assign a value to a variable
                    //    later we can change the value of the variable of any datatype dynamically

// what is NAN property in java Script?

                    // it reptesents the value which is not a number 

                    // let a=1;
                    // let b="aravind"
                    // console.log( parseInt(a),parseInt(b));

// what is passed by value and passed by reference ??


           // Pass By Value: 
           //In Pass by value, function is called by directly passing the value of the variable as an argument.
           //So any changes made inside the function does not affect the original value

                //    let a= 1;
                //    let b= 2;
                //    function passvalue(a,b){
                //        a = a+10;
                //        b = b+1;
                //        console.log("values of a and b inside fn ", a, b);
                //    }
                //    passvalue(a,b);
                //    console.log("values of a and b after fn ", a, b);

                    // Pass By Reference :
                    //In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. 
                    // So changing the value inside the function also change the original value. In JavaScript array and Object 
                    //follows pass by reference property

                    // let obj = {
                    //     a:10,
                    //     b:20
                    // }
                    // function add(obj){
                    //      obj.a = obj.a + 5;
                    //      obj.b = obj.b + 10;
                    //      console.log("inside the fn " , obj.a , obj.b);

                    // }
                    // add(obj)
                    // console.log("after fn execution" , obj.a, obj.b);

// what are the immediate invoke functions??

                    // immediate invoke functhins are that the function will be invoked immediatly as soon as they are created  

                    //     let a=20;
                    //     let b=30;
                    // (function add(a,b){
                    //        let c = a + b;
                    //        console.log("addition of", a ,"and", b, "is ", c);
                    // })(a,b);


//Explain Higher Order Functions in javascript??
                    // in java script functions and arrays are also the data types like let var and const we can pass functions as the parameters to the another functions
                    // the higher order functions are that accepts a function as a parameter and returns function.
                    
                    // function formal() {
                    //     console.log("How are you?");
                    //   }
                    //   function casual() {
                    //     console.log("What's up?");
                    //   }
                    //   function greet(type, greetFormal, greetCasual) {
                    //     if(type === 'formal') {
                    //       greetFormal();
                    //     } else if(type === 'casual') {
                    //       greetCasual();
                    //     }
                    //   }
                    //   greet('casual', formal, casual);



//Explain “this” keyword??


                    // in Java Script this keyword refers to an object 
                    // the most common use of this keyword is to elemenate the confusion between class attributes and parameters with the same name 



                    // let refer={
                    //     name:"aravind",
                    //     age : 22,
                    //     skills : "html css and js",
                    //     fulldetails: function(){
                    //         return this.name + "of" + this.age+ " years age has "+ this.skills+" skills"
                    //     },

                    // }
                    // var fetch = refer.fulldetails();
                    // console.log(fetch);

//Explain call(), apply() and, bind() methods??

                    //the three methods are used to invoke the functions but these will be unique from each other
                    // call and apply call a function while bind creates a function
                    //call
                    // we can pass arguments induidally by coma saparated  
                    // apply
                    // similar to call method but accepts arguments as array
                    //bind
                    // returns the new array 

                    // let user1={
                    //     name : "Aravind",
                    //     age : 22,
                    //     changeage: function(a,b){
                    //         this.age = this.age + a - b;
                    //         console.log(this.age);
                    //     }
                    // }
                    // let user2={
                    //     name:"rahul",
                    //     age : 23
                    // }
                    // user1.changeage.call(user2,5,0);
                    // user1.changeage.apply(user2,[5,1])
                    // let fnbind =user1.changeage.bind(user2,5,1)
                    // fnbind();
                    

//Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript??


                    // local scope
                    // the variable declared inside the function is known as locally scopped  and it is devided into further block scope and function scope
                    
                    //block scope
                    // when a variable declared inside if or switch statements it is considerd as a blockscoped  and available  only for that conditional loop 
                    //ie which is declared inside a curlybraces is known as blockscope variables

                    // functional scope 
                    // when a variable declared inside a function it is only accessable inside that function and can't be used outside the function

                    // scope chain
                    // when ever our code tries to access a variable during the variable call it starts form local variables.
                    //and if the variable not found it it countinues in parent scope and
                    // continus till reach the global scope and completes scarching for variables.

//Explain Closures in JavaScript??

                    // Closures means that an inner function always have the access to the variables and parameters of the outer functions 
                    //even after the outer function has returned 

                    // function outer(){
                    //     var name = 20;
                    //     function inner(){
                    //         alert( name+=10);
                            
                    //     };
                    //     return inner;
                    // }
                    // var inner1 = outer();
                    // inner1();

//What are object prototypes?

                        //JavaScript is a prototype based language, so, whenever we create a function using JavaScript, 
                        //JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), 
                        //where we can attach methods and properties in a prototype object,
                        //which enables all the other objects to inherit these methods and properties
                       
                        // function constructor
                       
                        // function Person(name, job, yearOfBirth){   
                        //     this.name= name;
                        //     this.job= job;
                        //     this.yearOfBirth= yearOfBirth;
                        // }
                        // Person.prototype.calculateAge= function(){
                        //     console.log('The current age is: '+(2019- this.yearOfBirth));
                        // }
                        // console.log(Person.prototype);




//What are callbacks?
                    // call back functions are that when ever we pass the function as an argument to the another function so that function passed as parameter will execute in the parent function 

                    // function hello(name){
                    //     alert("hello    " + name)
                    // }
                    // function userinput(callback){
                    //     var name  = prompt("please enter the name");
                    //     callback(name);
                    // }
                    // userinput(hello);
//What is recursion in a programming language?

                    // a function is called recursive function when it is called by itself until the condition is satisfied
                   
                    // let a=1,b=2,i=0;
                    // function recure(){
                    //    if(i<=5)
                    //    {
                    //    let c = a+b;
                    //    console.log(c);
                    //    i++;
                    //    recure();
                    //     }
                    //     else
                    //     {
                    //         console.log("stop recursion");
                    //     }
                        
                    // }
                    // recure();
                    


//What is the use of a constructor function in javascript?

                    //A constructor is a special function that creates and initializes an object instance of a class. 
                    //In JavaScript, a constructor gets called when an object is created using the new keyword.

                    //The purpose of a constructor is to create a new object and set values for any existing object properties.

                    //Constructor
                    // function User (name, age) {
                    //     this.name = name;
                    //     this.age = age;
                    // }

                    // var user1 = new User('Bob', 25);
                    // var user2 = new User('Alice', 27);
                    // alert(User);
                    // console.log(user1);
                    // console.log(user2);


