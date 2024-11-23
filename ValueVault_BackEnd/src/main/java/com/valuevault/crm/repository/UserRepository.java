package com.valuevault.crm.repository;

import com.valuevault.crm.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
//    UserEntity findByUserName(String userName);

    UserEntity findByEmail(String email);
}
