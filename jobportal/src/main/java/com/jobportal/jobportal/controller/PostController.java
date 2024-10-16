package com.jobportal.jobportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.jobportal.model.Post;
import com.jobportal.jobportal.repository.PostRepository;
import com.jobportal.jobportal.repository.searchRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class PostController {
    @Autowired
    PostRepository repo;
    @Autowired
    searchRepository srepo;

    @PostMapping("postpost")    
    @CrossOrigin   
    public Post addPost(@RequestBody Post post){
        return repo.save(post);
    }

    @GetMapping("/allPost")
    @CrossOrigin
    public List<Post> getAllPosts(){
        return repo.findAll();
    }

    @GetMapping("allPost1/{text}")
    @CrossOrigin
    public List<Post> search(@PathVariable String text){
        return srepo.findByText(text);
    }
}
