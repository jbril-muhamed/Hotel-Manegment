package com.CEdev.skylight.service.interfac;

import com.CEdev.skylight.dto.LoginRequest;
import com.CEdev.skylight.dto.Response;
import com.CEdev.skylight.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}
