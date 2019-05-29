import React, { Component } from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'

import classes from './ContactData.module.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = async (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'guz',
        address: {
          street: 'testStreet',
          country: 'Belgium'
        },
        email: 'john@wagon.be'
      }
    }
    try {
      const response = await axios.post('/orders.json', order)
      console.log(response)
      this.setState({ loading: false })
      this.props.history.push('/')
    } catch (error) {
      this.setState({ loading: false })
      console.log(error)
    }

    // axios.post('/orders.json', order)
    //   .then(response => {
    //     this.setState({ loading: false })
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false })
    //     console.log(error)
    //   })
  }

  render () {
    let form = (
      <>
        <input className={classes.Input} type="text" name="name" placeholder="Your name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your email" />
        <input className={classes.Input} type="text" name="street" placeholder="Your street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
