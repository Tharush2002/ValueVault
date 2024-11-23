package com.valuevault.crm.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderItem {
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
