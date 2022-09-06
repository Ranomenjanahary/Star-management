package com.example.starmanagement.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Drinking implements Serializable {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name;
    private Integer price;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinTable(name = "drinking_categories",
            joinColumns = @JoinColumn(name = "id_drinking", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "id_category", referencedColumnName = "id")
    )
    @ToString.Exclude
    private Set<Category> categories;
}
