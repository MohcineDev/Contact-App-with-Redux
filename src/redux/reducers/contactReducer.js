const initialState = {
    Contacts: [
        {
            id: 1,
            fullName: 'MohcineDev',
            email: 'MohcineDev@gmail.com'
        } 
    ]
}

const contactReducer = (state = initialState, action) => {

    if (action.type === 'ADD_CONTACT') {
        return {
            ...state,
            Contacts: [...state.Contacts, { ...action.payload }]
        }
    }

    else if (action.type === 'DELETE_CONTACT') {
        let newContacts = state.Contacts.filter(item => item.id !==  action.payload)

        return {
            ...state,
            Contacts: newContacts
        }
    }
    else if (action.type === 'UPDATE_CONTACT') {

        for (let i = 0; i < state.Contacts.length; i++) {
            if (state.Contacts[i].id === action.payload.id) {
                state.Contacts[i].fullName = action.payload.fullName
                state.Contacts[i].email = action.payload.email
                break
            }
        }

        return {
            ...state,
            Contacts: [...state.Contacts]
        }
    }
    return state
}

export default contactReducer