package com.valuevault.crm.service;

import com.valuevault.crm.entity.UserEntity;
import com.valuevault.crm.model.LoginRequest;
import com.valuevault.crm.model.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
//    boolean checkCredentials(User user);
    UserEntity save(User user);

    User findById(Long id);
}
