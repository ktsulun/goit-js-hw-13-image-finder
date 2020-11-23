import getRefs from './js/refs'
import { debounce } from 'lodash'
import '../src/style.css'
import NewsApiService from './js/apiService'
import renderImageCard from './js/renderImageCard'


const refs = getRefs();
// console.log(refs)

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, 2000));
refs.loadMoreBtn.addEventListener('click', onLoadMore)


function onSearch(e) {
newsApiService.query = e.target.value;
clearGalleryContainer();
newsApiService.resetPage();
newsApiService.fetchAPI().then(renderImageCard)

if (newsApiService.searchWord = '') {
  clearGalleryContainer();
}
}



function onLoadMore () {
  newsApiService.fetchAPI().then(renderImageCard)
}


function clearGalleryContainer() {
  refs.galleryContainer.innerHTML = '';
}