package com.example.starmanagement.service;

import com.example.starmanagement.model.Drinking;
import com.example.starmanagement.repository.DrinkingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DrinkingService {
    private final DrinkingRepository drinkingRepository;

    public List<Drinking> createOrUpdate(List<Drinking> drinkingList) {
        return drinkingRepository.saveAll(drinkingList);
    }

    public Drinking findById(Long id) {
        return drinkingRepository.getReferenceById(id);
    }

    public String deleteById(Long id) {
        if (drinkingRepository.findById(id).isPresent()) {
            drinkingRepository.deleteById(id);
            return "drinking successfully deleted";
        }
        return "This drinking does not exist";
    }
}
