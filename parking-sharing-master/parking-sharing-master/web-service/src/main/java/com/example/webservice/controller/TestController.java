package com.example.webservice.controller;

import com.example.webservice.restful.RestResult;
import com.example.webservice.service.TestService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author xsm
 * @version 1.0
 * @date 2020/6/19 11:22
 */
@RestController
@Api(value = "过滤器规则", tags = { "告警过滤器" })
public class TestController {

    @Autowired
    private TestService testService;
    @GetMapping(value = "filter")
    @ApiOperation(value = "获取过滤器列表")
    public RestResult getFilterList(){
        return  testService.getFilterList();
    }
}
