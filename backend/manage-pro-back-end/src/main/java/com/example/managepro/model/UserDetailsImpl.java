package com.example.managepro.model;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;


@Getter
public class UserDetailsImpl implements UserDetails {
    private long id;
    private String userName;
    private String userPassword;
    private String userEmail;
    Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(long id, String userName, String userPassword, String userEmail, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.userName = userName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.authorities = authorities;
    }

    public static UserDetailsImpl build (User user) {
        List<GrantedAuthority> grantedAuthorityList = user.getRoles().stream()
                .map(role -> (GrantedAuthority) role::getName)
                .toList();
        return new UserDetailsImpl(
                user.getId(),
                user.getUserName(),
                user.getUserPassword(),
                user.getUserEmail(),
                grantedAuthorityList
                );
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return userPassword;
    }

    @Override
    public String getUsername() {
        return userEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
