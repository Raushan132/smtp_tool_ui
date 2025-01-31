import Footer from "./components/Footer"
import FormContainer from "./components/FormContainer"
import Header from "./components/Header"
import InfoContainer from "./components/InfoContainer"


function App() {
 
  return (
    <>
     <Header />
     <div className="flex gap-20 ">
      <InfoContainer />
      <FormContainer />
     </div>
     <Footer />
    </>
  )
}

export default App
