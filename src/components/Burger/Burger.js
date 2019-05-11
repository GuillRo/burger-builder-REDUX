import React from 'react'
import shortid from 'shortid'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
  // V3, maintenant ça suit toujours le meme pattern, c'est plus joli...
  // Si j'ai le temps j'essaierai une V4 ou le truc est toujours ajouté en dernier ou un truc du genre...

  let arrayIngredients = []
  let arrayIngredientsTemp = Object.entries(props.ingredients)
  let completed = false

  const fillArrayIng = (arr) => {
    if (arr[1] > 0) {
      arr[1] -= 1
      arrayIngredients.push(<BurgerIngredient key={shortid.generate()} type={arr[0]} />)
      completed = false
    }
  }

  while (!completed) {
    completed = true
    arrayIngredientsTemp.forEach(arr => {
      fillArrayIng(arr)
    })
  }

  // V1, exemple de la vidéo, assez incompréhensible mais bon... peut être intéressant de piger

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

  // V2, ma version a moi, fais la meme chose que v1 mais en compréhensible.
  // Par contre les meat sont ensemble, les cheese aussi, c'est pas super beau...
  // c'est pareil pour la version de la vidéo mais je vais tenter d'améliorer ça

  // let arrayIngredients = []
  // let arrayIngredientsTemp = Object.entries(props.ingredients)
  // arrayIngredientsTemp.forEach(arr => {
  //   for (let i = 0; i < arr[1]; i++) {
  //     arrayIngredients.push(<BurgerIngredient key={shortid.generate()} type={arr[0]} />)
  //   }
  // })

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
