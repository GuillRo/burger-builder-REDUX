import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://build-a-burg.firebaseio.com/'
})

export default instance
