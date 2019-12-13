import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    return res.json(response.data.slice(0, 20))
}