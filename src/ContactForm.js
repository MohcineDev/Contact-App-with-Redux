import AddContact from './AddContact'
import { connect } from 'react-redux'
import { deleteContact } from './redux/actions/contactActions'
import { useState } from 'react'
import { Wrapper, Table, Th, Td, Button, ButtonUpdate } from './Style/mainStyle'

function ContactForm(props) {

    const [Contact, setContact] = useState({
        id: null,
        fullName: '',
        email: ''
    })

    const handleUpdate = (item) => {
        document.querySelector('#fullName').value = item.fullName
        document.querySelector('#email').value = item.email
        setContact({
            id: item.id,
            fullName: item.fullName,
            email: item.email
        })
    }

    const allContacts = props.Contacts.length > 0 ? props.Contacts.map((item, index) =>
        <tr key={index}>
            <Td>{item.id}</Td>
            <Td>{item.fullName}</Td>
            <Td>{item.email}</Td>
            <Td>
                <Button onClick={() => props.delete(item.id)}>Delete</Button>
                <ButtonUpdate onClick={() => handleUpdate(item)}>Update</ButtonUpdate>
            </Td>
        </tr>
    ) : <tr><Td colSpan="4">Sorry Nothing To Show here!!</Td></tr>

    return <>
        <AddContact contact={Contact} />
        <Wrapper>
            <Table>
                <thead>
                    <tr>
                        <Th>Id</Th>
                        <Th>Full Name</Th>
                        <Th>email</Th>
                        <Th>Action</Th>
                    </tr>
                </thead>
                <tbody>
                    {allContacts}

                </tbody>
            </Table>
        </Wrapper>
    </>
}

const mapStateToProps = (state) => {
    return {
        Contacts: state.Contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(deleteContact(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)