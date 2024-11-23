package com.valuevault.crm.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.valuevault.crm.entity.OrderItemEntity;
import com.valuevault.crm.model.OrderItem;
import com.valuevault.crm.repository.OrderItemRepository;
import com.valuevault.crm.service.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderItemServiceImpl implements OrderItemService {
    private final OrderItemRepository orderItemRepository;
    private final ObjectMapper objectMapper;

    @Override
    public void save(OrderItem[] orderItems) {
        for (int i = 0; i < orderItems.length; i++) {
            orderItemRepository.save(objectMapper.convertValue(orderItems[i], OrderItemEntity.class));
        }
    }

    @Override
    public List<OrderItem> findByUserId(Long id) {
        List<OrderItem> orderItemList = new ArrayList<>();
        orderItemRepository.findByUserId(id).forEach(orderItemEntity -> orderItemList.add(objectMapper.convertValue(orderItemEntity, OrderItem.class)));
        return orderItemList;
    }
}
