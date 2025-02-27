import { useDispatch } from "react-redux";
import { setContact } from "../redux/contactSlice";
import { useState } from "react";

export const AddContactForm = () => {
  const initialValue = {
    name: "",
    phone: "",
    email: "",
  };
  const [user, setUser] = useState(initialValue);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    const isCalled = false;
    const userData = { ...user, isCalled };

    dispatch(setContact(userData));

    setUser(initialValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((user) => ({
      ...user,
      [name]: value,
    }));
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
            value={user.name}
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
            value={user.phone}
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
            value={user.email}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <button type="submit">Añadir contacto</button>
      </form>
    </>
  );
};
