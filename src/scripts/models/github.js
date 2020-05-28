export default class Github {
  constructor() {
    this.getCommits = this.getCommits.bind(this);
  }

  _processResponseWithCommits(response) {
    const commits = response.reduce((accumulator, current) => {
      if (accumulator.length < 20) {
        const {name, email, date} = current.commit.committer;
        const message = current.commit.message;
        const avatar = current.author.avatar_url;
        accumulator.push({
          name,
          email,
          date,
          message,
          avatar
        })
        return accumulator;
      } else {
        return accumulator;
      }
    }, [])
    return commits;
  }

  getCommits(user, repo) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/commits`)
    .then(response => response.json())
    .then(response => this._processResponseWithCommits(response)); 
  }
}