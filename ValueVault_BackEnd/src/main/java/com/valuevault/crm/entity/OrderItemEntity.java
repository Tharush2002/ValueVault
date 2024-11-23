package com.valuevault.crm.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "order_items")
public class OrderItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String serialNumber;
    private String productPrice;
    private String productOriginalPrice;
    private String starRating;
    private Integer ratings;
    private Integer quantity;
    private String imageUrl;
    private Long userId;
    private Long orderId;
}
