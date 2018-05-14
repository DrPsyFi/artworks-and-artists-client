import axios from 'axios'
const url = 'http://localhost:3000/api/artworks'

class ArtworkAPI {
  static get () {
    return axios.get(url)
  }
}

export default ArtworkAPI
