import { useEffect, useState } from 'react'
import { Form, FormGroup, Button, Label, Input, FormText} from 'reactstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const BookForm = ({addBook, bookEdit}) => {

    const[id, setId]=useState('')
    const[title, setTitle]= useState('')
    const[publicationDate, setPublicationDate]= useState('')
    const[authorId, setAuthorId]= useState('')   
    
    useEffect(()=>{
        setId(bookEdit.id)
        setTitle(bookEdit.title)
        setPublicationDate(bookEdit.publicationDate)
        setAuthorId(bookEdit.authorId)
    }, [bookEdit])
    
    const handleClick = () =>{
        console.log( "HOLAAAA")
        console.log({id,title, publicationDate, authorId})
        addBook({id,title,publicationDate, authorId})
    }

  return (   
    <Form>
        <h1>Creacion de un libro</h1>
        <FormGroup>
            <Label for="exampleBooks"> Numero de identificacion </Label>
            <Input id="idBook" name="idBook" placeholder="id" type="text" onChange={(e)=>{setId(e.target.value)}} />
        </FormGroup>
        
        <FormGroup>
            <Label for="exampleBooks" > Titulo del libro </Label>
            <Input id="bookTitle" name="tittle" placeholder="Titulo" type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
        </FormGroup>
              <FormGroup>
            <Label for="exampleBooks" > Fecha de publicacion </Label>
            <Input id="bookPublicationDate" name="publicationDate" placeholder="fecha de publicacion" type="date" onChange={(e)=>{setPublicationDate(e.target.value)}}/>
        </FormGroup>
        
        <FormGroup>
            <Label for="exampleBooks" > Numero de identificacion del autor </Label>
            <Input id="idAuthor" name="idAuthor" placeholder="id autor" type="text" onChange={(e)=>{setAuthorId(e.target.value)}}/>
        </FormGroup>
        
        <Link to="/libros">
        <Button onClick={handleClick}>
            Enviar
        </Button>
        </Link>
    </Form>
  )
}

BookForm.propTypes = {
    addBook: PropTypes.func, 
    bookEdit:PropTypes.object
}

export default BookForm
