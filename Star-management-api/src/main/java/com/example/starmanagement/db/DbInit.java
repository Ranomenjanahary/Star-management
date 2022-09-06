package com.example.starmanagement.db;

import com.example.starmanagement.model.User;
import com.example.starmanagement.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import com.example.starmanagement.model.User;
import com.example.starmanagement.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class DbInit implements CommandLineRunner {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public DbInit(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Delete all
        this.userRepository.deleteAll();

        // Create users
        User client = new User(1L,"client",passwordEncoder.encode("21024"),"CLIENT","");
        User admin = new User(2L,"admin",passwordEncoder.encode("adminBoss"),"ADMIN","ACCESS_TEST");

        List<User> users = Arrays.asList(client,admin);

        // Save to db
        this.userRepository.saveAll(users);
    }
}

