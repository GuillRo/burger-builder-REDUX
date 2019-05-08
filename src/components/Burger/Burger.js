import React from 'react'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
  let arrayIngredients = Object.keys(props.ingredients)
    .map(ingrdKey => {
      return [...Array(props.ingredients[ingrdKey])]
        .map((_, i) => {
          return <BurgerIngredient key={ingrdKey + i} type={ingrdKey} />
        })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (arrayIngredients.length === 0) {
    arrayIngredients = <p className="Burger">Please start adding ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {arrayIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
