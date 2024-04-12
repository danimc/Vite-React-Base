import React, { createContext, useState, ReactNode } from 'react'

// Define the shape of your context value
interface BaseContextValue {
  state: unknown // Consider specifying a more detailed type instead of any
  setState: React.Dispatch<React.SetStateAction<unknown>> // Same here, specify the type of state
}

// Providing a more appropriate initial value
const initialContextValue: BaseContextValue = {
  state: null, // You may want to define a more specific initial state
  setState: () => {} // Empty function as a placeholder
}

const BaseContext = createContext<BaseContextValue>(initialContextValue)

// Create the context provider
export function BaseProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<unknown>(null) // Consider specifying a more detailed type

  const contextValue = { state, setState }

  return <BaseContext.Provider value={contextValue}> {children}</BaseContext.Provider>
}

export default BaseContext
