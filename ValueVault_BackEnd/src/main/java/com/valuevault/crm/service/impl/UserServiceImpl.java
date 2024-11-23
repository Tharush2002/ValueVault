package com.valuevault.crm.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.valuevault.crm.entity.UserEntity;
import com.valuevault.crm.model.LoginRequest;
import com.valuevault.crm.model.User;
import com.valuevault.crm.repository.UserRepository;
import com.valuevault.crm.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    @Override
    public List<User> getAll() {
        List<User> userList = new ArrayList<>();
        userRepository.findAll().forEach(userEntity -> userList.add(objectMapper.convertValue(userEntity, User.class)));
        return userList;
    }

    @Override
    public UserEntity save(User user) {
       return userRepository.save(objectMapper.convertValue(user, UserEntity.class));
    }

    @Override
    public User findById(Long id) {
        Optional<UserEntity> userEntityOptional = userRepository.findById(id);
        UserEntity userEntity = userEntityOptional.orElse(null);
        return userEntity != null ? objectMapper.convertValue(userEntity, User.class) : null;
    }


//    @Override
//    public boolean checkCredentials(User user){
//        String userName = user.getUserName();
//        String password = user.getPassword();
//        if (isUserNameValid(userName) && isPasswordValid(password)){
//            throw new Exception("Invalid UserName & Password");
//        }else{
//            if(customerRepository.findByUserName(customer.getUserName()).getPassword().equals(customer.getPassword())){
//                return true;
//            }else{
//                return false;
//            }
//        }
//    }

//    private boolean isUserNameValid(String userName){
//        if(userName.isEmpty() && userName==null){
//            return false;
//        }else{
//            ADVANCED VALIDATION
//            return true;
//        }
//    }
//
//    private boolean isPasswordValid(String password){
//        if(password.isEmpty() && password==null){
//            return false;
//        }else{
//            ADVANCED VALIDATION
//            return true;
//        }
//    }
}
