import { createSlice } from "@reduxjs/toolkit";
import defaultContacts from '../data/contacts'
import { act } from "react";



const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        users: defaultContacts,
        contador: 0,
        currentContact: 0,
    },
    reducers: {
        setContact(state, action) {

            state.users.push(action.payload);
        },
        setIsCalled(state, action) {

            //buscar al usuario con id
            const users = state.users.map((user, index) => {
                if (index === action.payload) {
                    user.isCalled = !user.isCalled;                    
                }
                
                return user
            });

            state.users = users         

            




        },
        selectContact(state,action){

       
            //Selecciona el proximo contacto
            if(action.payload == 'next'){
                if(state.currentContact == state.users.length -1) return;
                state.currentContact += 1
            }
            if(action.payload == 'prev'){
                if(state.currentContact ==0) return;
                state.currentContact -= 1
            }
            const currenContact = state.users[state.currentContact];
            console.log(currenContact)

        }
    }
});

/* Selects */
export const selectUsers = (state) => state.contact.users;
export const selectPagina = (state) => state.contact.pagina;
export const selectCurrentContact = (state) => state.contact.currentContact;
/*ACttiopns que qquiero que mis componentes despachen */
export const { setContact, setIsCalled,selectContact } = contactSlice.actions

/* el propio slice como db para confiogurar el store */
export default contactSlice.reducer;