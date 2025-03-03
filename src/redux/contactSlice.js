import { createSlice } from "@reduxjs/toolkit";
import defaultContacts from '../data/contacts'

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: defaultContacts,
        contador: 0,
        currentContactId: 0,
        currenContact:{
            name:'',
            phone:'',
            email:'',
            isCalled:false
        }

    },
    reducers: {

        setCurrentContact(state,action){        
            state.currenContact = {...state.currenContact, [action.payload.name]: action.payload.value}            
        },
        setContacts(state, action) {
            state.contacts.push(state.currenContact);        
        },
        setIsCalled(state, action) {

            //buscar al usuario con id
            const users = state.contacts.map((user, index) => {
                if (index === action.payload) {
                    user.isCalled = !user.isCalled;                    
                }
                
                return user
            });

            state.contacts = users         

            




        },
        selectContact(state,action){

       
            //Selecciona el proximo contacto
            if(action.payload == 'next'){
                if(state.currentContactId == state.contacts.length -1) return;
                state.currentContactId += 1
            }
            if(action.payload == 'prev'){
                if(state.currentContactId ==0) return;
                state.currentContactId -= 1
            }
            const currenContact = state.contacts[state.currentContactId];
            console.log(currenContact)

        }
    }
});

/* Selects */
export const selectContacts = (state) => state.contact.contacts;
export const selectPagina = (state) => state.contact.pagina;
export const selectCurrentContactId = (state) => state.contact.currentContactId;
export const selectCurrentContact = (state) => state.contact.currentContact;


/*ACttiopns que qquiero que mis componentes despachen */
export const { setContacts, setIsCalled,selectContact,setCurrentContact } = contactSlice.actions

/* el propio slice como db para confiogurar el store */
export default contactSlice.reducer;