package com.jobportal.jobportal.repository;

import java.util.List;

import com.jobportal.jobportal.model.Post;

public interface searchRepository {

    List<Post> findByText(String text);

}
