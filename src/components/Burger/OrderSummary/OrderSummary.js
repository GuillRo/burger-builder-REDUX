import React from 'react'
import shortid from 'shortid'

import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingr => {
      return (
        <li key={shortid.generate()}>
          <span style={{ textTransform: 'capitalize' }}>{ingr} </span>: {props.ingredients[ingr]}
        </li>)
    })

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following elements:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)} €</strong></p>
      <p>Continue to Checkout?</p>
      <Button
        clicked={props.purchaseCancelled}
        btnType="Danger">
        CANCEL
      </Button>
      <Button
      clicked={props.purchaseContinued}
      btnType="Success">
      CONTINUE
      </Button>
    </>
  )
}

export default orderSummary