const repo = {
    name: "LaunchX",
    author: "LizethConu",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`;
    }
   }
   
   console.log("Nombre del repo:" + repo.name);
   console.log("Issues totales: " + repo.getTotalIssues());
   console.log(repo.getGeneralInfo());


const issue = {
     title: "Issue 2",
     repositoryNameAssociated: "repository1",
     status: "open",
     labels: "Label1",
     author: "LizethConu",
     dateCreated: "01/01/2022",
     lastUpdated: "04/05/2022",
      getTitleAndAuthor: function(){
        return `The title is ${this.title} the author name is ${this.author}`
      },
      getGeneralInfo: function(){
        return `This Issue ${this.title} was created ${this.dateCreated}`
      }
   }
   console.log(issue.getTitleAndAuthor());
   console.log(issue.getGeneralInfo());

pullRequest ={
  title: "pullrequest",
  branchName: "main",
  dateCreated: "01/03/2022",
  author: "LizethConu",
  status: "pending",
  repositoryNameAssociated: "Repository-32",
  getStatus: function(){
    return `The status is: ${this.status}`
  },
  getTitleAndAuthor: function(){
    return `The Title is ${this.title} the author is ${this.author}`
  }
}

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());



   