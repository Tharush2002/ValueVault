package com.valuevault.crm.service;

import com.valuevault.crm.entity.OrderEntity;
import com.valuevault.crm.model.Order;

import java.util.List;

public interface OrderService {
    OrderEntity save(Order order);

    List<Order> findByUserId(Long id);
}
