
const API_KEY = 'ТВІЙ_API_КЛЮЧ';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.hits.length === 0) {
      throw new Error("No images found");
    }
    return data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
