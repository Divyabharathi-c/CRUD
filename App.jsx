import './App.css'
import { UserProvider } from './context/provider/UserProvider'
import Users from './context/provider/Users'

function App() {
  

  return (
      <UserProvider>
         <Users />
      </UserProvider>
      
  )
}

export default App
