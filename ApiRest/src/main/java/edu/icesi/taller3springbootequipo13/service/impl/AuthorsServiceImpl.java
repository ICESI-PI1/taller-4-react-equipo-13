package edu.icesi.taller3springbootequipo13.service.impl;

import edu.icesi.taller3springbootequipo13.persistance.models.Author;
import edu.icesi.taller3springbootequipo13.persistance.respositories.IAuthorsRepository;
import edu.icesi.taller3springbootequipo13.service.IAuthorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AuthorsServiceImpl implements IAuthorsService {

    @Autowired
    private IAuthorsRepository authorsRepository;


    @Override
    public Optional<Author> save(Author author) {
        return authorsRepository.save(author);
    }

    @Override
    public List<Author> getAll() {
        return authorsRepository.getAll();
    }

    @Override
    public Author edit(Long id, Author newAuthor) throws AuthorNotFoundException {
        List<Author> authors = authorsRepository.getAll();
        for(int i=0; i<authors.size(); i++){
            if(Objects.equals(authors.get(i).getId(), id)){
                Author author = authors.get(i);
                author.setName(newAuthor.getName());
                author.setNationality(newAuthor.getNationality());
                return author;
            }
        }
        throw new AuthorNotFoundException("No se encontró un autor con el ID especificado: " + id);
    }

    @Override
    public Optional<Author> findById(Long id) {
        return authorsRepository.findById(id);
    }

    @Override
    public Optional<Author> delete(Long id) {
        return authorsRepository.delete(id);
    }


}
