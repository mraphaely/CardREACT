import data from "../../data.json"
import Btn from "./Button/Button"
import './App.css'

const  App = () => {
    console.log(data)

    return(
        <main className="container">
            <div className="card">
              <h3>Summary</h3>
              <Btn texto='continue'/>
            </div>
        </main>
    )
}
export default App;
