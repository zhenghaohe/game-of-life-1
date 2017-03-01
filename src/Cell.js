import React, { Component } from 'react'
import './css/Cell.css'

class Cell extends Component {
    renderLive() {
        return (
          <td  onClick={this.props.toggleCell(this.props.row,this.props.col)} className='component-cell alive'>
              <span></span>
          </td>
        )
    }
    renderDormant () {
        return (
          <td  onClick={this.props.toggleCell(this.props.row,this.props.col)} className='component-cell dormant'>
              <span></span>
          </td>
        )
    }
    render() {
        if (this.props.living) {
            return this.renderLive()

        } else {
            return this.renderDormant()
        }
    }
}


Cell.propTypes = {
    living: React.PropTypes.bool,
    row: React.PropTypes.number,
    col: React.PropTypes.number,
    toggleCell: React.PropTypes.func
};
export default Cell