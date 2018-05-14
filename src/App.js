import React, { Component } from 'react'
import Header from './components/Header'

import ArtworksList from './components/Artworks/ArtworksList'
import ArtworkForm from './components/Artworks/ArtworkForm'

import ArtworkAPI from './api/ArtworkAPI'
import ArtistAPI from './api/ArtistAPI'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    artworks: [],
    selected: {}
  }

  componentWillMount = async () => {
    const [ artworkResponse, artistResponse ] = await Promise.all([
      ArtworkAPI.get(),
      ArtistAPI.get()
    ])

    const { artworks } = artworkResponse.data
    const { artists } = artistResponse.data

    artworks.forEach(artwork => {
      artwork.artist = artists.find(artist => artist.id === artwork.artist_id)
    })

    await this.setState({ ...this.state, artworks })
  }

  handleEdit = (artwork) => {
    this.setState({ ...this.state, selected: artwork })
  }

  render() {
    return (
      <main>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <ArtworksList artworks={ this.state.artworks } handleEdit={ this.handleEdit } />
            <ArtworkForm artwork={ this.state.selected }/>
          </div>
        </div>
      </main>
    )
  }
}

export default App
