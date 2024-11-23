package com.valuevault.crm.controller;

import com.valuevault.crm.entity.UserEntity;
import com.valuevault.crm.model.LoginRequest;
import com.valuevault.crm.model.User;
import com.valuevault.crm.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {
    final UserService userService;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getAll(){
        return userService.getAll();
    }

//    @PostMapping("/validate-credentials")
//    @ResponseStatus(HttpStatus.OK)
//    public boolean checkCredentials(@RequestBody Customer customer){
//        return customerService.checkCredentials(customer);
//    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Long save(@RequestBody User user) {
        UserEntity userEntity = userService.save(user);
        return userEntity.getId();
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public void update(@RequestBody User user) {
        userService.save(user);
    }

    @GetMapping("/find-by-id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public User findById(@PathVariable Long id){
        return userService.findById(id);
    }
}
