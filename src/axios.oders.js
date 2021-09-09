import Axios from 'axios'


const instance=Axios.create({
    baseURL:'https://my-burger-react-a6da3.firebaseio.com'
})

export default instance;