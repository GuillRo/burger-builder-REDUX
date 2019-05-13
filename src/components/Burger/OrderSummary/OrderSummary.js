import React, { Component } from 'react'
import shortid from 'shortid'

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  // should ba function component but put it as a class for componentWillUpdate

  componentWillUpdate () {
    console.log('[OrderSummary] WillUpdate')
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingr => {
        return (
          <li key={shortid.generate()}>
            <span style={{ textTransform: 'capitalize' }}>{ingr} </span>: {this.props.ingredients[ingr]}
          </li>)
      })

    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following elements:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)} €</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          clicked={this.props.purchaseCancelled}
          btnType="Danger">
          CANCEL
        </Button>
        <Button
          clicked={this.props.purchaseContinued}
          btnType="Success">
          CONTINUE
        </Button>
      </>
    )
  }
}
export default OrderSummary
