package com.valuevault.crm.service;

import com.valuevault.crm.repository.CustomerRepository;
import com.valuevault.crm.util.MainType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ServiceFactory {
    private final CustomerRepository customerRepository;

    public <T extends SuperService>T getServiceType(MainType type){
        switch (type){
            case CUSTOMER: return (T) customerRepository;

            default: return null;
        }
    }
}
