import { useState } from "react"
import { connect } from 'react-redux'
import { addContact, updateContact } from './redux/actions/contactActions'
import { Wrapper, Form, Input, InputSubmit } from './Style/mainStyle'

function AddContact(props) {

    const [Contact, setContact] = useState({
        id: Math.floor(Math.random() * 1000),
        fullName: '',
        email: ''
    })

    const resetState = () => {
        setContact({
            id: Math.floor(Math.random() * 1000),
            fullName: '',
            email: ''
        })
        document.querySelector('#fullName').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#fullName').focus()
    }

    const handleInput = (e) => {
        setContact({ ...Contact, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //check if update btn is clicked
        if (props.contact.id == null) {
            if (Contact.fullName.trim() === '' || Contact.email.trim() === '')
                return

            props.Add(Contact)
        }
        else {
            props.contact.fullName = document.querySelector('#fullName').value
            props.contact.email = document.querySelector('#email').value
            props.update(props.contact)

            //reset contact prop
            props.contact.fullName = ''
            props.contact.email = ''
        }
        resetState()
        props.contact.id = null
    }

    return <Wrapper>
        <Form onSubmit={e => handleSubmit(e)}  >
            <Input type="text" id='fullName' placeholder="full name..." autoFocus={true} onChange={(e) => handleInput(e)} />
            <Input type="email" id='email' placeholder="email..." onChange={(e) => handleInput(e)} />
            <InputSubmit type="submit" id="add" value="Done" />
        </Form>
    </Wrapper>
}

const mapStateToProps = (state) => {
    return {
        Contacts: state.Contacts
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        Add: (contact) => dispatch(addContact(contact)),
        update: (contact) => dispatch(updateContact(contact))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact)