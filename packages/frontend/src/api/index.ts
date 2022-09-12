import axios from 'axios'

const URL = 'https://api.zippopotam.us/'

export const api = axios.create({
  baseURL: URL,
})

