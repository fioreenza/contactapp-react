import ContactItem from "../components/ContactItem";
import React from "react";

export default function ContactList () {
    const [contacts, setContacts] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch(`${process.env.BASE_URL}/api/contacts`,
                {
                    headers : {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${process.env.BEARER_TOKEN}`,
                    },
                }
            );
            const data = await response.json();
            setContacts(data.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    return (
        <section className="contact_list">
        <h2 className="main_container_subheading2">Contact List</h2>
        <div id="contactList">
        {contacts.map((contact) => (
            <ContactItem key={contact.id} name={contact.name} email={contact.email} imgUrl={contact.img_url}/>
        ))} 
        </div>
      </section>
    );  
}