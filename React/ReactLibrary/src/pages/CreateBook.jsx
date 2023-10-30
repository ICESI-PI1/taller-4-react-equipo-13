import { useEffect, useState } from 'react'
import BookForm from '../components/BookForm'
import axios from  '../config/axios'
import { bookcontext } from '../context/bookcontext'


const CreateBook = () => {
  const[bookEdit, setBookEdit]= useState({id:"", title:"", publicationDate:"", authorId: ""})

  const addBook = async (book) => {
    try {
      // Comprueba si el libro ya tiene un ID asignado
      /*
      if (bookEdit.id) {
        // Realiza una solicitud PUT para actualizar el libro
        const res = await axios.put(`/libros/${bookEdit.id}`, book);
        if (res.status === 200) {
          setBookEdit(res.data);
        }
      } else {
        */
        // Realiza una solicitud POST para crear un nuevo libro
        const res = await axios.post("/libros", book);
        if (res.status === 201) {
          setBookEdit(res.data);
        }
      //}
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <bookcontext.Provider>
          <BookForm addBook={addBook} bookEdit={bookEdit}/>
      </bookcontext.Provider>
  )
}

export default CreateBook
