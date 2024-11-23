package com.valuevault.crm.service;

import com.valuevault.crm.model.OrderItem;

import java.util.List;

public interface OrderItemService {
    void save(OrderItem[] orderItems);

    List<OrderItem> findByUserId(Long id);
}
