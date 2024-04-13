import axios from 'axios'

const BaseService = () => {
  const getData = async (url: string) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { getData }
}

export default BaseService
