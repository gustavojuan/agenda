import { useDispatch } from "react-redux";
import { setContact } from "../redux/contactSlice";


export const AddContactForm = () => {
    const dispatch = useDispatch();


    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const name = 'gustavo';
        const phone = '+34654a6';
        const email = 'asdasdad';
        const isCalled = false;

        const user = {
            name,
            phone,
            email,
            isCalled
        }
        dispatch(setContact(user))       
        
    }



  return (
    <>
    <form>
        <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" />
        </div>
        <div>
            <label htmlFor="phone">phone:</label>
            <input type="text" name="phone" id="phone" />
        </div>
        <div>
            <label htmlFor="email">email:</label>
            <input type="email" name="email" id="email" />
        </div>

        <button type="submit" onClick={(e)=>{handleFormSubmit(e)}}>Añadir contacto</button>
    </form>
    </>
  )
}
