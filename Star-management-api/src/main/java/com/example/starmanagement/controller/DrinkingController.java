package com.example.starmanagement.controller;

import com.example.starmanagement.model.Drinking;
import com.example.starmanagement.repository.DrinkingRepository;
import com.example.starmanagement.service.DrinkingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/drinkings")
@CrossOrigin
public class DrinkingController {
    private final DrinkingService drinkingService;
    private final DrinkingRepository drinkingRepository;

    @PutMapping("")
    public List<Drinking> createDrinking(@RequestBody List<Drinking> drinkingList) {
        return drinkingService.createOrUpdate(drinkingList);
    }

    @GetMapping("")
    public List<Drinking> getAll() {
        return drinkingRepository.findAll();
    }

    @GetMapping("/{id}")
    public Drinking findById(@PathVariable Long id) {
        return drinkingService.findById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable Long id){
        return drinkingService.deleteById(id);
    }

}
