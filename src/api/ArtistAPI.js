import axios from 'axios'
const url = 'http://localhost:3000/api/artists'

class ArtistAPI {
  static get () {
    return axios.get(url)
  }

  static post (body) {
    return axios.post(url, body)
  }

  static put (body) {
    return axios.put(`${url}/${body.id}`, body)
  }
}

export default ArtistAPI
