import  axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
export let getSliders = ()=>{
  return axios.get('/sliders')
}

