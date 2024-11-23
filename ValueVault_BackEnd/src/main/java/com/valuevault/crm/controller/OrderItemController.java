package com.valuevault.crm.controller;

import com.valuevault.crm.model.OrderItem;
import com.valuevault.crm.service.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order-items")
@CrossOrigin
@RequiredArgsConstructor
public class OrderItemController {
    final OrderItemService orderItemService;

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.OK)
    public void save(@RequestBody OrderItem[] orderItems) {
        orderItemService.save(orderItems);
    }

    @GetMapping("/find-by-user-id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<OrderItem> findByUserId(@PathVariable Long id){
        return orderItemService.findByUserId(id);
    }
}
