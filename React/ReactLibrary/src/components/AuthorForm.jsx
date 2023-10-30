import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Button, Label, Input, FormText} from 'reactstrap'
import { Link } from 'react-router-dom';


function AuthorForm({addAuthor, authorEdit}){

    const[id, setId]=useState('')
    const[name, setName]= useState('')
    const[nationality, setNationality]= useState('')
    
    useEffect(()=>{
        setId(authorEdit.id)
        setName(authorEdit.name)
        setNationality(authorEdit.nationality)
    }, [authorEdit])
    
    const handleClick = () =>{
        console.log({id,name,nationality})
        addAuthor({id,name,nationality})
    }

    return(
        <Form>
            <FormGroup>
                <Label for="exampleId">Numero de identificacion</Label>
                <Input id="exampleId" name="id" placeholder="Pon el id del autor" type="id" onChange={(e)=>{setId(e.target.value)}} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleName">Nombre del autor</Label>
                <Input id="exampleName" name="Name" placeholder="Pon el nombre de autor" type="Name" onChange={(e)=>{setName(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleN">Nacionalidad</Label>
                <Input id="exampleN" name="Name" placeholder="Pon la nacionalidad del autor" type="Name" onChange={(e)=>{setNationality(e.target.value)}}/>
            </FormGroup>
            <Link to="/autores">
            <Button onClick={handleClick}>
                Submit
            </Button>
            </Link>
        </Form>
    )
}

AuthorForm.propTypes = {
    addAuthor: PropTypes.func, 
    authorEdit:PropTypes.object
}

export default AuthorForm