
import { useSelector } from "react-redux"
import { AddContactForm } from "./AddContactForm"
import { ContactList } from "./ContactList"

import { selectUsers } from "../redux/contactSlice"
import { ContactCards } from "./ContactCards"

export const Agenda = () => {    
    const contacts  = useSelector(selectUsers);
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
