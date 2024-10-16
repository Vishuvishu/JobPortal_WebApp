package com.jobportal.jobportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobportal.jobportal.model.Post;

public interface PostRepository extends MongoRepository<Post,String> {

}
