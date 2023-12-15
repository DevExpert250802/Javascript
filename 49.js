// lexical scope 

const myVar = "value1";//** lexical scope of global variable

function myApp(){

    // const myVar = "value1"; 

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);//** see if myVar is present then check lexical scope of myfunc-> myApp
        }
        myFunc2();//call 3
    }


    console.log(myVar);//** see if myVar is present then checks lexical scope of myApp
    myFunc();//call 2
}

myApp();// call 1