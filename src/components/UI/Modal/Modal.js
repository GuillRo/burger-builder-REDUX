import React, { Component } from 'react'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Modal.module.css'

class Modal extends Component {
  // N'update pas la modale dès que l'on ajoute un ingrédient, mais seulement quand on click sur order
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  componentWillUpdate () {
    console.log('[Modal] WillUpdate')
  }

  render () {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default Modal
