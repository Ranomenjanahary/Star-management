package com.example.starmanagement.controller;

import com.example.starmanagement.model.Category;
import com.example.starmanagement.repository.CategoryRepository;
import com.example.starmanagement.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/categories")
@CrossOrigin
public class CategoryController {
    private final CategoryService categoryService;
    private final CategoryRepository categoryRepository;

    @GetMapping("")
    public List<Category> getAll(@RequestParam Optional<Integer> page, @RequestParam Optional<Integer> pageSize) {
        Pageable pageable = PageRequest.of(page.orElse(0), pageSize.orElse(10));
        Page<Category> categoryPage = categoryRepository.findAll(pageable);
        return categoryPage.stream().toList();
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Long id) {
        return categoryService.deleteById(id);
    }

    @PutMapping("")
    public List<Category> createOrUpdate(@RequestBody List<Category> categories){
        return categoryService.createOrUpdate(categories);
    }
}
