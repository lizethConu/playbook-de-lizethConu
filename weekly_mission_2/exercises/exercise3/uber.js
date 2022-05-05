const profile = {
    name: "Lizeth Covarrubias",
    userName: "LizethConu",
    gender: "Female",
    age: 24,
    getAge: function(){
        return `The Age is ${this.age}`
    }
}
const travel ={
    originPlace: "Topacio 30",
    destinationPlace: "Paseo de la realeza 132",
    driver: "Karla Jazmin",
    passing: "Karen Lizeth",
    getGeneralInfo: function(){
        return `the driver is ${this.driver} and the passanger is
        ${this.passing} and the origin place is ${this.originPlace}
        and the final destination is ${this.destinationPlace}`
    }
}

console.log(profile.getAge());
console.log(travel.getGeneralInfo());