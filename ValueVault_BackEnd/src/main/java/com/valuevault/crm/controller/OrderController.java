package com.valuevault.crm.controller;

import com.valuevault.crm.entity.OrderEntity;
import com.valuevault.crm.model.Order;
import com.valuevault.crm.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin
@RequiredArgsConstructor
public class OrderController {
    final OrderService orderService;

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.OK)
    public Long save(@RequestBody Order order) {
        OrderEntity orderEntity = orderService.save(order);
        return orderEntity.getId();
    }

    @GetMapping("/find-by-user-id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Order> findByUserId(@PathVariable Long id){
        return orderService.findByUserId(id);
    }
}
