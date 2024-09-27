import './App.css'
import Input from './components/form/Input'
import ContactList from './container/ContactList'

function App() {
  return (
    <>
  <main className="main_container">
    <h1 className="main_container_heading">Contact Apps</h1>
    <section className="add_contact">
      <h2 className="main_container_subheading">Add New Contact</h2>
      <div className="container_input">
        <Input placeholder="Name"/>
        <Input placeholder="Email"/>
        <button className="button_add" id="addButton">
          Add
        </button>
      </div>
    </section>
    <ContactList/>
  </main>
</>
  )
}

export default App
