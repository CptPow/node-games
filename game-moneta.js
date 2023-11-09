import chalk from "chalk";
import EventEmitter from "events"
const eventEmitter = new EventEmitter;

eventEmitter.addListener("testa o croce", function()  {
    function lancioMoneta() {
        const lancioComputer = Math.floor(Math.random() * 2);
        if (lancioComputer === 1){
            return "testa"
        } else {
            return "croce"
        }
    }
    const lancio = lancioMoneta();
    if( lancio === process.argv[2] ){
        console.log(`Dopo essersi fermata a terra sulla moneta si vede ${lancio}`);
        setTimeout(function(){
            console.log((chalk.bgGreen("Hai vinto!!!")));
        },3000)
    }else{
        console.log(`Dopo essersi fermata a terra sulla moneta si vede ${lancio}`);
        setTimeout(function(){
            console.log((chalk.bgRed("Hai perso!!!")));
        },3000)
    }
})
eventEmitter.emit("testa o croce")


