import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      circle: 180,
      saturation: 100,
      brightness: 50
    }
    this.handleColor = this.handleColor.bind(this)
  }
  handleColor (e) {
    this.setState({
      circle: e.target.value
    })
  }
  handleBrightness (e) {
    this.setState({
      brightness: e.target.value
    })
  }
  handleSaturation (e) {
    this.setState({
      saturation: e.target.value
    })
  }
  render () {
    let background = `hsl(${this.state.circle}, ${this.state.saturation}%, ${this.state.brightness}%)`
    let styles = {
      background: background,
      margin: '100px auto',
      width: '20%',
      padding: '20px 0',
      border: '2px solid black',
      textAlign: 'center'
    }
    return (
      <div>
        <div style={styles}>
          <h3>Barra de colores hsl</h3>
          Color {this.state.circle}<input type='range' min={0} max={360} onChange={(e) => this.handleColor(e)} /><br />
          Saturación {this.state.saturation}<input type='range' min={0} max={100} onChange={(e) => this.handleSaturation(e)} /><br />
          Brillo {this.state.brightness}<input type='range' min={0} max={100} onChange={(e) => this.handleBrightness(e)} /><br />
        </div>
      </div>
    )
  }
}

export default App
