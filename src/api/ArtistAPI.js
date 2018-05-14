import axios from 'axios'
const url = 'http://localhost:3000/api/artists'

class ArtistAPI {
  static get () {
    return axios.get(url)
  }
}

export default ArtistAPI
