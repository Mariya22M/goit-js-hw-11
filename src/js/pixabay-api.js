import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const search = document.querySelector('.search_bar');
const loader = document.querySelector('.loader');

const emptyArrayError = 'Sorry, there are no images matching your search query. Please try again!';

const dispatchEvent = (array) => document.dispatchEvent(new CustomEvent('imagesFetched', {detail: array}));

export function ImageSearch(source, options) {
	let searchValue = search.value.trim();
	if (!searchValue) return;
	options.set('q', searchValue);
	loader.style.display = 'block';

	fetch(`${source}${options}`)
		.then(response => {
			if (!response.ok) {
				raiseError("Sorry, response is not ok");
			}
			return response.json();
		})
		.then(posts => {
			if (posts.total) {
				dispatchEvent(posts.hits);
				console.log(posts.hits)
			} else {
				raiseError(emptyArrayError);
				dispatchEvent([]);
			}
			clear();
		})
		.catch(error => {
			raiseError(error);
			dispatchEvent([]);
			clear();
		});
}

function raiseError(error) {
	iziToast.error({
		message: error,
		position: 'topRight',
		color: 'red',
		theme: 'dark',
	});
}

function clear() {
	loader.style.display = 'none';
	search.value = '';
}