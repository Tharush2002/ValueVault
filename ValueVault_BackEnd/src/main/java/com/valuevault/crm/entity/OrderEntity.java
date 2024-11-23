package com.valuevault.crm.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String name;
    private String email;
    private String city;
    private String country;
    private String phoneNumber;
    private String addressLine1;
    private String addressLine2;
    private String stateProvince;
    private String zipCode;
    private String landMarks;
    private String deliveryType;
    private String paymentType;
    private Double productPrice;
    private Double tax;
    private Double totalPrice;
    private LocalDate date;
}
