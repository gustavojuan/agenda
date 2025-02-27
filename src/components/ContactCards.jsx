import { useDispatch, useSelector } from "react-redux";
import "./ContactCards.css";
import {
  selectContact,
  selectContacts,
  selectCurrentContactId,
  setIsCalled,
} from "../redux/contactSlice";

export const ContactCards = () => {
  const users = useSelector(selectContacts);
  const currentUserId = useSelector(selectCurrentContactId);
  const dispatch = useDispatch();
  const currentUser = users[currentUserId];
  const handleOnClick = (e) => {
    if (e.target.value == "next" || e.target.value == "prev") {
      dispatch(selectContact(e.target.value));
    }
  };
  return (
    <>
      <h1>Siguiente Llamada</h1>

      <div className="card">
        <p className={currentUser.isCalled ? "llamado" : ""}>
          {currentUser.name}
        </p>

        <button
          disabled={currentUser.isCalled}
          onClick={() => dispatch(setIsCalled(currentUserId))}
        >
          LLamar
        </button>
      </div>

      <div className="actions">
        <button value="prev" onClick={(e) => handleOnClick(e)}>
          Prev
        </button>
        <button value="next" onClick={(e) => handleOnClick(e)}>
          Next
        </button>
      </div>
    </>
  );
};
