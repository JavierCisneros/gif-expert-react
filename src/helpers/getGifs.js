export const getGifs = async(category) =>{
    const api_key = `Mt3SfSDfF9b6OlRb42gF0pdy2HSbZAuS&q`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}=${category}&limit=10`;
    const resp = await fetch(url);
    const {data = []} = await resp.json();
    
    const gifs = data.map(img =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url,
    }))
    return gifs;
}