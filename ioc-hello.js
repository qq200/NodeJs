function helloEn(){
    console.log("hello");
}
function helloRo(){
    console.log("salut");
}
function helloRu(){
    console.log("Privet");
}
        // helloEn(); ///direct control
//coderii care fac framework API
        //invertion of control
function platform(f){
    f();
}
platform(helloRo);