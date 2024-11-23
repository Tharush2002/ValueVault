package com.valuevault.crm.service;

import com.valuevault.crm.model.LoginRequest;

public interface LoginRequestService {
    Long findByEmail(LoginRequest loginRequest);
}
