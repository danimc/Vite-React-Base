import { BaseProvider } from '../../context'
import HomePage from '../Home'

const Container = () => {
  return (
    <div>
      <BaseProvider>
        <h1>Container Page</h1>
        <HomePage />
      </BaseProvider>
    </div>
  )
}

export default Container
