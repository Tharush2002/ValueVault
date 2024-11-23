package com.valuevault.crm.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.valuevault.crm.entity.UserEntity;
import com.valuevault.crm.model.LoginRequest;
import com.valuevault.crm.repository.UserRepository;
import com.valuevault.crm.service.LoginRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginRequestServiceImpl implements LoginRequestService {
    private final UserRepository userRepository;

    @Override
    public Long findByEmail(LoginRequest loginRequest) {
        UserEntity userEntity = userRepository.findByEmail(loginRequest.getEmail());
        if(userEntity!=null && loginRequest.getPassword().equals(userEntity.getPassword())) {
            return userEntity.getId();
        }
        return null;
    }
}
