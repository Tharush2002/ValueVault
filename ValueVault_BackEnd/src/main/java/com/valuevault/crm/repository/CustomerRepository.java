package com.valuevault.crm.repository;

import com.valuevault.crm.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer> {
    CustomerEntity findByUserName(String userName);
}
