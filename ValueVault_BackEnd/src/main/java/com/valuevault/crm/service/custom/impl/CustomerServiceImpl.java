package com.valuevault.crm.service.custom.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.valuevault.crm.model.Customer;
import com.valuevault.crm.repository.CustomerRepository;
import com.valuevault.crm.service.custom.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final ObjectMapper objectMapper;

    @Override
    public List<Customer> getAll() {
        List<Customer> customerList = new ArrayList<>();
        customerRepository.findAll().forEach(customerEntity -> customerList.add(objectMapper.convertValue(customerEntity, Customer.class)));
        return customerList;
    }

    @Override
    public boolean checkCredentials(Customer customer) throws Exception {
        String userName = customer.getUserName();
        String password = customer.getPassword();
        if (isUserNameValid(userName) && isPasswordValid(password)){
            throw new Exception("Invalid UserName & Password");
        }else{
            if(customerRepository.findByUserName(customer.getUserName()).getPassword().equals(customer.getPassword())){
                return true;
            }else{
                return false;
            }
        }
    }

    private boolean isUserNameValid(String userName){
        if(userName.isEmpty() && userName==null){
            return false;
        }else{
//            ADVANCED VALIDATION
            return true;
        }
    }

    private boolean isPasswordValid(String password){
        if(password.isEmpty() && password==null){
            return false;
        }else{
//            ADVANCED VALIDATION
            return true;
        }
    }

}
