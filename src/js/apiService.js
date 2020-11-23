import renderImageCard from './renderImageCard'

export default class NewsApiService {
  constructor() {
    this.query = '';
    this.page = 1
  }

  fetchAPI() {
    console.log(this)
    const page = 1;
    const per_page = 12;
    const MY_KEY = '19177852-b1d4f8b0af27ffd052e9c4f4a';
   

    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchWord}&page=${this.page}&per_page=${per_page}&key=${MY_KEY}`)
        .then(response => response.json())
        .then(data => {
          this.page += 1
        return data.hits;
        }
          )
        .catch(error => console.log(error));

}

resetPage() {
  this.page = 1;
}

get query() {
  return this.searchWord;
}

set query(newQuery) {
  this.searchWord = newQuery;
}
}