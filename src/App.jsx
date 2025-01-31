import './App.css'
import AppRoutes from './routes/appRoutes'
import LikeCounterState from './context/LikeCounterState'

function App() {

  return (
    <>
      <LikeCounterState>
      <AppRoutes/>
      </LikeCounterState>
    </>
  )
}

export default App
