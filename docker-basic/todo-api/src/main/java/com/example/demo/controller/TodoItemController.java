package com.example.demo.controller;

import com.example.demo.entity.TodoItem;
import com.example.demo.service.TodoItemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/todo-items")
public class TodoItemController {
    private final TodoItemService service;

    public TodoItemController(TodoItemService service) {
        this.service = service;
    }

    @GetMapping
    @Cacheable("allTodoItems")
    public List<TodoItem> all() {
        log.info("cache missed");
        return service.findAll();
    }
}
