package com.example.demo.service;

import com.example.demo.entity.TodoItem;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoItemService {
    private final TodoItemRepository repository;

    public TodoItemService(TodoItemRepository repository) {
        this.repository = repository;
    }

    public List<TodoItem> findAll() {
        return repository.findAll();
    }
}
