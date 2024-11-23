package com.valuevault.crm.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.valuevault.crm.entity.OrderEntity;
import com.valuevault.crm.model.Order;
import com.valuevault.crm.repository.OrderRepository;
import com.valuevault.crm.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final ObjectMapper objectMapper;

    @Override
    public OrderEntity save(Order order) {
        return orderRepository.save(objectMapper.convertValue(order, OrderEntity.class));
    }

    @Override
    public List<Order> findByUserId(Long id) {
        List<Order> orderList = new ArrayList<>();
        orderRepository.findByUserId(id).forEach(orderEntity -> orderList.add(objectMapper.convertValue(orderEntity, Order.class)));
        return orderList;
    }
}
