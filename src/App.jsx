import React from 'react'
import Navigation from './navigation'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

// App component that sets up the Redux store and navigation
const App = () => {
  return (
    <Provider store={Store}>
     <Navigation/>
    </Provider>
  )
}

export default App
