import useCustomHook from '../../hooks/useCustomHook'

interface IButtonProps {
  label: string
}

const Button = ({ label }: IButtonProps) => {
  const { obtData } = useCustomHook()

  const onClick = () => {
    obtData()
  }

  return (
    <button onClick={onClick} className="bg-green-500 p-2 rounded-md">
      {' '}
      {label}
    </button>
  )
}

export default Button
