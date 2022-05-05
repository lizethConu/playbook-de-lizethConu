const user={
    name: "Liz",
    username: "LizethConu",
    age:23,
    getAge: function(){
        return this.age
    }
}

console.log("The age is "+ user.getAge());

const post = {
    title: "Today it is a good day",
    content: "Yes It is a good day!!!",
    date: "04/05/2022",
    getGeneralInfo: function(){
        return `the title of the post is ${this.title} and the date was ${this.date}`
    }
}
console.log(post.getGeneralInfo());
const biography = {
    username: "LizethConu",
    numbersOfFriends: 200,
    numbersOfPosts: 500,
    getNumberOfFriends: function(){
        return `The number os friends are ${this.numbersOfFriends}`
    }
}

console.log(biography.getNumberOfFriends());