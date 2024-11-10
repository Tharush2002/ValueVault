package com.valuevault.crm.controller;

import com.valuevault.crm.model.Customer;
import com.valuevault.crm.service.ServiceFactory;
import com.valuevault.crm.service.custom.CustomerService;
import com.valuevault.crm.util.MainType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
@RequiredArgsConstructor
public class CustomerController {
    final CustomerService customerService;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.OK)
    public List<Customer> getAll(){
        return customerService.getAll();
    }

    @PostMapping("/validate-credentials")
    @ResponseStatus(HttpStatus.OK)
    public boolean checkCredentials(@RequestBody Customer customer){
        return customerService.checkCredentials(customer);
    }

}
