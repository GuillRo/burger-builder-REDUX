import React from 'react'
import shortid from 'shortid'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
  console.log(props.ingredients)
  let arrayIngredients = []
  let arrayIngredientsTemp = Object.entries(props.ingredients)
  arrayIngredientsTemp.forEach(arr => {
    for (let i = 0; i < arr[1]; i++) {
      arrayIngredients.push(<BurgerIngredient key={shortid.generate()} type={arr[0]} />)
    }
  })

  // ça en dessous c'est un pattern de la vidéo qui fait la même chose que plus haut
  // mais en incompréhensible... ça vaut le coup de regarder, c'est ptet + rapide

  // let arrayIngredients = Object.keys(props.ingredients)
  //   .map(ingrdKey => {
  //     return [...Array(props.ingredients[ingrdKey])]
  //       .map((_, i) => {
  //         return <BurgerIngredient key={ingrdKey + i} type={ingrdKey} />
  //       })
  //   })
  //   .reduce((arr, el) => {
  //     return arr.concat(el)
  //   }, [])

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
