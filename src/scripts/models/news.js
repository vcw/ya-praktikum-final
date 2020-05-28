export default class News {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  _processResponseWithNews(response) {
    let articles = response.articles;
    return articles.reduce((accumulator, current) => {
      const { title, publishedAt, description, urlToImage } = current;
      const source = current.source.name;
      accumulator.push({
        title,
        publishedAt,
        description,
        urlToImage,
        source
      })
      return accumulator;
    }, []);
  }

  getNews(keyword, fromDate) {
    const url = `https://praktikum.tk/news/v2/everything?q=${keyword}&from=${fromDate}&pageSize=100&apiKey=3b4a1ba7f9c947e6a829644748b3bd90`;

    return fetch(url)
    .then(response => response.json())
    .then(response => this._processResponseWithNews(response))
  }
}