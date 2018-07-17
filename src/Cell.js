import React from 'react';

class Cell extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  switchColor = () => {
    const newColor = '#333';
    this.setState({
      color: newColor
    })
  }

  render() {
    return(
      <div className="cell" style={{ backgroundColor: this.state.color  }} onClick={this.switchColor}>

      </div>
    )
  }

}

export default Cell
