function Greetings(){
    const message = "Hello"

    function sayHello(){
        console.log(message)
    }
    return sayHello
}
const sayHello = Greetings()

sayHello()