package com.sd.test;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class TestController {

    @RequestMapping(value = "/load/products", method = RequestMethod.GET)
    public String getEmployee() {
        return JSONObject.valueToString(
                "this is sd");
    }
}
