
import { useSelector } from "react-redux"
import { AddContactForm } from "./AddContactForm"
import { ContactList } from "./ContactList"


import { ContactCards } from "./ContactCards"

import { selectContacts } from "../redux/contactSlice"

export const Agenda = () => {    
    const contacts  = useSelector(selectContacts);
    const por_llamar = contacts.filter((contact) => contact.isCalled == false)
    
  return (
    <div>
        <AddContactForm />
        <ContactList />

        <ContactCards />
        
        <p>Numero de cotnactos {contacts.length} / por llamar {por_llamar.length}</p>
    </div>
  )
}
