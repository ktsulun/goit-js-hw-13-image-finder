import getRefs from './refs'
const refs = getRefs()
import CardTmpl from '../templates/tmpl.hbs'

export default function renderImageCard(cards) {
  


    console.log(cards)
    const markup = CardTmpl(cards)
    makeMarkup(markup);
}

function makeMarkup(html) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', html);
}
