import Input from "../components/form/Input";

export default function ContactInput () {
    return (
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
    );
}