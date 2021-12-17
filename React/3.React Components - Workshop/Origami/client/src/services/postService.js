
import api from './api'


export const getAll = () => {
    return fetch(api.posts)
        .then(res => res.json())
        .catch(err => console.log('handled error' + err))
}