package com.valuevault.crm.controller;

import com.valuevault.crm.model.LoginRequest;
import com.valuevault.crm.service.LoginRequestService;
import com.valuevault.crm.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/log-in")
@CrossOrigin
@RequiredArgsConstructor
public class LoginRequestController {
    final LoginRequestService loginRequestService;

    @PostMapping("/is-found")
    @ResponseStatus(HttpStatus.OK)
    public Long isUserFound(@RequestBody LoginRequest loginRequest){
        return loginRequestService.findByEmail(loginRequest);
    }

}
