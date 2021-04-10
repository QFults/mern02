import axios from 'axios'

const Gif = {
  getGiphy: search => axios.get(`/api/giphy/${search}`),
  getGifs: () => axios.get('/api/gifs'),
  addGif: gif => axios.post('/api/gifs', gif),
  deleteGif: id => axios.delete(`/api/gifs/${id}`)
}

export default Gif
