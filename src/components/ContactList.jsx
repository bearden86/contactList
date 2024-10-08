//create a component, name it ContactList. make sure it is the default export from the file
import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList() {
  const [contacts, setContacts] = useState(dummyContacts);
  useEffect(() => {
    async function fetchContacts() {
      try {
        //fetch logic here
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        //parse response from the api with the .json() method
        const result = await response.json();
        console.log("API response:", result);
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  console.log("Render");
  console.log("Contacts: ", contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          /* map over data here in javascript */
          // dummyContacts.map((contact, index) => (
          //   <tr key={index}>
          //     <td>{contact.name}</td>
          //     <td>{contact.email}</td>
          //     <td>{contact.phone}</td>
          //   </tr>
          // ))
          contacts.map((contact) => {
            return <ContactRow key={contact.id} contact={contact} />;
          })
        }
      </tbody>
    </table>
  );
}
