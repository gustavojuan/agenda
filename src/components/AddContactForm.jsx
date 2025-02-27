import { useDispatch } from "react-redux";
import { setContacts } from "../redux/contactSlice";
import { setCurrentContact } from "../redux/contactSlice";

export const AddContactForm = () => {


    const dispatch = useDispatch();
   
  
  const handleFormSubmit = (e) => {
    e.preventDefault();      
    dispatch(setContacts());   

    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCurrentContact({name,value}))   
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"            
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"          
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            id="email"            
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <button type="submit">Añadir contacto</button>
      </form>
    </>
  );
};
