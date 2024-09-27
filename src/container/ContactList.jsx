import ContactItem from "../components/ContactItem";
import React from "react";

export default function ContactList () {
    const [contacts, setContacts] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('https://contact-apps-api.ainunns.me/api/contacts',
                {
                    headers : {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDZmNDBkLWQyNzYtNDA5YS04MmVmLWJmZDc1MzY1NjQ2YyIsIm5hbWUiOiJGaW9yZW56YSBBZGVsaWEgTmFsbGUiLCJlbWFpbCI6IjUwMjcyMzEwNTNAc3R1ZGVudC5pdHMuYWMuaWQiLCJpYXQiOjE3MjY4NTE3MDQsImV4cCI6MTcyOTQ0MzcwNH0.hh8C3PaCkq3l1cHBxs_86cGE-qV7UQUMIP42-fKi0vc`
                    },
                }
            );
            const data = await response.json();
            setContacts(data.data);
            }
            catch (error) {
                console.log(error);
            }
            fetchData();
        };
    }, []);
    return (
        <section className="contact_list">
        <pre>{JSON.stringify(contacts, null, 2)}</pre>
        <h2 className="main_container_subheading2">Contact List</h2>
        <div id="contactList">
        {contacts.map((contact) => (
        <ContactItem 
            key= {contact.id}
            imgUrl={contact.photo}
            name={contact.name}
            email={contact.email}
        />
        ))}
        </div>
      </section>
    );
}