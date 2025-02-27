import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../redux/contactSlice";

import './ContactList.css';
import { setIsCalled } from "../redux/contactSlice";

export const ContactList = () => {

const dispatch = useDispatch();
  const contacts = useSelector(selectUsers);

  const handleOnClick = (index)  =>  {
    //despachar la accion que cambie el valor de state.contacts.id.isCalled
    dispatch(setIsCalled(index))


  }

  return (
    <ul>
      {contacts.map((contact, index) => {
        return (
          <li key={index}>
            <span style={{cursor:'pointer'}} onClick={()=>handleOnClick(index)} className={(contact.isCalled)? 'llamado' : ''}>Nombre:{contact.name} Telefono{contact.phone}{" "}</span>
            {(!contact.isCalled) ? <button onClick={()=>handleOnClick(index)}>Llamar</button> : 'Ha sido llamado' }            
          </li>
        );
      })}
    </ul>
  );
};
