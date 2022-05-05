const user = {
    user: "Liz",
    username: "LizethConu",
    bio: "Trying my best",
    getUser: function(){
        return `The user is ${this.user}`
    },
    getBio: function(){
        return `the Bio of the user ${this.userName} is ${this.bio}`
    }
}
const trending_topic={
    title: "Met gala 2022",
    numberOfTweets: 20789,
    startdate: "01/05/2022",
    getTitle:function(){
        return `The Title of the trending topic is ${this.title}`
    }
}

const hashtag = {
    title: "#Good Day",
    numberOfTweets: 20000,
    getGeneralInfo: function(){
        return `The title of the hashtag is ${this.title} and the numbers of Tweets are ${this.numberOfTweets}`
    }
}
console.log(user.getUser());
console.log(user.getBio());
console.log(trending_topic.getTitle());
console.log(hashtag.getGeneralInfo());