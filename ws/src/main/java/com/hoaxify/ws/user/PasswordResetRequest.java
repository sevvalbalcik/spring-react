package com.hoaxify.ws.user;

import jakarta.validation.constraints.Email;

public record PasswordResetRequest(@Email String email) {
} 
