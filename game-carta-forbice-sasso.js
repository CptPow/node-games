import chalk from "chalk";
import EventEmitter from "events";
const eventEmitter = new EventEmitter();

eventEmitter.addListener("carta,forbice e sasso", function () {
  function cartaForbiciSasso() {
    const scelta = ["carta", "forbice", "sasso"];
    const sceltaMano = scelta[Math.floor(Math.random() * 3)];
    return sceltaMano;
  }
  const lancio = cartaForbiciSasso();
  if (process.argv[2] === lancio) {
    console.log(`Il PC ha scelto ${lancio} e tu ${process.argv[2]}`);
    setTimeout(function(){
        console.log((chalk.bgMagenta("Pareggio!")));
    },3000)
  } else if (
    (process.argv[2] === "carta" && lancio === "sasso") ||
    (process.argv[2] === "forbice" && lancio === "carta") ||
    (process.argv[2] === "sasso" && lancio === "forbice")
  ) {
    console.log(`Il PC ha scelto ${lancio} e tu ${process.argv[2]}`);
    setTimeout(function(){
        console.log((chalk.bgGreen("Hai vinto!")));
    },3000)
  } else {
    console.log(`Il PC ha scelto ${lancio} e tu ${process.argv[2]}`);
    setTimeout(function(){
        console.log((chalk.bgRed("Hai perso!")));
    },3000)
  }
});

eventEmitter.emit("carta,forbice e sasso");
