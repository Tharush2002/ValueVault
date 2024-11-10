package com.valuevault.crm.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "customer")
public class CustomerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    private String email;
    @Column(unique = true, nullable = false)
    private String userName;
    @Column(nullable = false)
    private String password;
    private String address;
    private LocalDate dateOfBirth;
    private LocalDate registrationDate;
}
