import {useEffect, useState} from 'react'
//import tasks from  '../data/todos.json'
import axios from  '../config/axios'
import Bookview from '../components/Bookview'
import { bookcontext } from '../context/bookcontext'


function GeneralList(){
    return(
        <bookcontext.Provider>
            <h1>Libros</h1>
            <Bookview/>
        </bookcontext.Provider>
    )
}

export default GeneralList