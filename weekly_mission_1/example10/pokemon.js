class Pokemon{
    constructor(pokemonName){
        this.pokemonName= pokemonName;
    }    
    sayHello(pokemonName) {        
        return console.log("Mi Pokemon "+`${this.pokemonName} ` +"te saluda!!!")
    }
}

export default Pokemon;