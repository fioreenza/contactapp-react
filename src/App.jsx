import './App.css'
import ContactInput from './container/ContactInput'
import ContactList from './container/ContactList'

function App() {
  return (
    <>
  <main className="main_container">
    <h1 className="main_container_heading">Contact Apps</h1>
    <ContactInput/>
    <ContactList/>
  </main>
</>
  )
}

export default App
