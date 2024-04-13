import { BaseService } from '../services'

// example of a custom hook
const useCustomHook = () => {
  const { getData } = BaseService()

  const helloFn = () => {
    return 'Hello World'
  }

  const obtData = async () => {
    try {
      const response = await getData('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { helloFn, obtData }
}

export default useCustomHook
