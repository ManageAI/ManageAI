package com.example.managepro.model.canban;

import lombok.Getter;

@Getter
public enum DefaultTaskStateColor {
    RED("#ff0000"),
    ORANGE("#ffa500"),
    GREEN("#006d38");

    private final String hexValue;

    DefaultTaskStateColor(String hex) {
        this.hexValue = hex;
    }
}
