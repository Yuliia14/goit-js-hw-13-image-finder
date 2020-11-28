import getRefs from './js/refs'
import { debounce } from 'lodash'
import './styles.css'
import PhotosApiService from './js/apiService'
import renderImageCard from './js/renderImageCard'

const refs = getRefs();

const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, 1000));
refs.loadMoreBtn.addEventListener('click', moreLoader)


function onSearch(e) {
photosApiService.query = e.target.value;
clearGalleryContainer();
photosApiService.resetPage();
photosApiService.fetchAPI().then(renderImageCard)

if (photosApiService.searchQuery = '') {
  clearGalleryContainer();
}
}

function moreLoader () {
    photosApiService.fetchAPI().then(renderImageCard)
  }
  
  
  function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
  }