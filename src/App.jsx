import './App.css'
import P5Wrapper from './components/P5Wrapper.jsx'
import sketch from './lib/p5/sketch.js'

function App() {
    return(
        <>
            <h1>Blob Tracking Sample</h1>
            <P5Wrapper sketch={sketch}/>
        </>
    )
}

export default App
