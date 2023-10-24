package edu.icesi.taller3springbootequipo13.persistance.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class Book {
    private long id;
    private String title;
    private Date publicationDate;
    private Long authorId;

    public Book (){

    }
}
