import Aside from "./components/Aside"
import Form from "./components/Form"
import Thank from "./components/Thank"

function App() {
  return (
    <>
    <main className="row row-cols-lg-2 justify-content-center align-items-center m-0">
        <Aside />
        <div>
          <div className="get-data">
            <Form />
          </div>
          <div className="success d-none">
            <Thank />
          </div>
        </div>
    </main>
    </>
  )
}

export default App
