package com.example.starmanagement.repository;

import com.example.starmanagement.model.Drinking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinkingRepository extends JpaRepository<Drinking, Long> {
}
