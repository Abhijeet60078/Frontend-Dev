function greetUser(name,callBack){
    console.log("Hello"+" "+name);
    callBack();

}
function showEndMessage(){
    console.log("Welcome to course!");
}
greetUser("Abhijeet",showEndMessage);