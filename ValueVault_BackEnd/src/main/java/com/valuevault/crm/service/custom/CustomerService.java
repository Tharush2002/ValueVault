package com.valuevault.crm.service.custom;

import com.valuevault.crm.model.Customer;
import com.valuevault.crm.service.SuperService;

import java.util.List;

public interface CustomerService extends SuperService {
    List<Customer> getAll();

    boolean checkCredentials(Customer customer) throws Exception;
}
