package com.example.starmanagement.service;

import com.example.starmanagement.model.Category;
import com.example.starmanagement.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public String deleteById(Long id) {
        if (categoryRepository.findById(id).isPresent()) {
            categoryRepository.deleteById(id);
            return "category successfully deleted";
        }
        return "This category does not exist";
    }

    public List<Category> createOrUpdate(List<Category> categories){
        return categoryRepository.saveAll(categories);
    }
}
