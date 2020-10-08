export default class News {
  constructor(apiKey) {
    this._apiKey = apiKey;
  }

  _processResponseWithNews(response) {
    const articles = response.articles;
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
    const CORSProxy = 'http://www.whateverorigin.org/get?url=';
    const urlWithoutCORSProxy = `http://newsapi.org/v2/everything?q=${keyword}&from=${fromDate}&pageSize=100&apiKey=${this._apiKey}`;
    const url = CORSProxy + encodeURIComponent(urlWithoutCORSProxy);
    
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then(response => this._processResponseWithNews(response))
  }
}
