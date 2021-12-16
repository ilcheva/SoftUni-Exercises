function getAll() {
    return fetch('http://localhost:3000/books')
        .then(response => response.json())
        .catch(error => console.log(error))
}
// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    getAll
}