import './App.css'
import Main from './components/Main'
import SmoothScroll from './components/SmoothScroll'

function App() {
  

  return (
    <>
      <SmoothScroll />
      <div className=' bg-black w-full min-h-[100vh] text-white '>
        <Main />
      </div>
    </>
  )
}

export default App
