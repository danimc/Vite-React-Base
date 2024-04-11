// example of a custom hook
const useCustomHook = () => {
  const helloFn = () => {
    return 'Hello World'
  }

  return { helloFn }
}

export default useCustomHook
