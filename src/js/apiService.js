import renderImageCard from './renderImageCard'

export default class PhotosApiService {
  constructor() {
    this.query = '';
    this.page = 1
  }

  fetchAPI() {
    console.log(this)
    const page = 1;
    const per_page = 12;
    const MY_KEY = '19307770-0b075029944e7b654fbe75927';
   

    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${per_page}&key=${MY_KEY}`)
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
  return this.searchQuery;
}

set query(newQuery) {
  this.searchQuery = newQuery;
}
}
