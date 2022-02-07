const url = 'http://localhost:5000/pets/'
export const getAll = (category = '') => {
    let petsUrl = url + ((category && category !== 'all') ? `?category=${category}` : '');
    return fetch(petsUrl)
        .then(res => res.json())
        .catch(e => console.log(e))
}
export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(e => console.log(e))
}