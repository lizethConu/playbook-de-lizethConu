class Pokemon{
    constructor(pokemonName){
        this.pokemonName= pokemonName;
    }    
    sayHello(pokemonName) {        
        return console.log("Mi Pokemon "+`${this.pokemonName} ` +"te saluda!!!")
    }
    sayMessage(message){
        return console.log("Mi pokemon "+`${this.pokemonName}` +"dice: "+ message)
    }
}

module.exports = Pokemon;