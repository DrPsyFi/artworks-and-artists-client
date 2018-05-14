import React, { Component } from 'react'
import Header from './components/Header'

import ArtworksList from './components/Artworks/ArtworksList'
import NewArtworkForm from './components/Artworks/NewArtworkForm'
import EditArtworkForm from './components/Artworks/EditArtworkForm'

import ArtworkAPI from './api/ArtworkAPI'
import ArtistAPI from './api/ArtistAPI'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    artworks: [],
    selected: {}
  }

  componentWillMount = async () => {
    const artworks = await ArtworkAPI.getWithArtists()
    this.setState({ ...this.state, artworks })
  }

  handleEdit = async (artwork) => {
    await this.setState({ ...this.state, selected: {} })
    await this.setState({ ...this.state, selected: artwork })
  }

  submitNewArtwork = async ({ artist, artwork }) => {
    const artistResponse = await ArtistAPI.post(artist)
    await ArtworkAPI.post({
      ...artwork,
      artist_id: artistResponse.data.artist.id
    })

    const artworks = await ArtworkAPI.getWithArtists()
    this.setState({ ...this.state, artworks })
  }

  updateExistingArtwork = async ({ artist, artwork }) => {
    await ArtistAPI.put(artist)
    await ArtworkAPI.put(artwork)

    const artworks = await ArtworkAPI.getWithArtists()
    this.setState({ artworks, selected: {} })
  }

  render() {
    return (
      <main>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <ArtworksList artworks={ this.state.artworks } handleEdit={ this.handleEdit } />
            {
              this.state.selected.id ?
              <EditArtworkForm updateExistingArtwork={ this.updateExistingArtwork } artwork={ this.state.selected } /> :
              <NewArtworkForm submitNewArtwork={ this.submitNewArtwork } />
            }
          </div>
        </div>
      </main>
    )
  }
}

export default App
