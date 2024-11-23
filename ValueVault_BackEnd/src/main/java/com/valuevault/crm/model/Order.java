package com.valuevault.crm.model;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Order {
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
