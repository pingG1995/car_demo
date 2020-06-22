package com.example.webservice.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.webservice.mapper.TestMapper;
import com.example.webservice.restful.RestResult;
import com.example.webservice.utils.ResultUtil;
import com.example.webservice.view.FilterRuleView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xsm
 * @version 1.0
 * @date 2020/6/19 11:23
 */
@Service
public class TestService {
    @Autowired
    private TestMapper testMapper;
    public RestResult getFilterList() {
        List<FilterRuleView> filterRuleViewList = testMapper.getFilter();
        if(filterRuleViewList != null) {
            for(FilterRuleView filterRuleView:filterRuleViewList) {
                JSONObject jsonObject = JSON.parseObject(filterRuleView.getRuleContext());
                FilterRuleView filterRuleView1 = jsonObject.toJavaObject(FilterRuleView.class);
                filterRuleView.setConditionList(filterRuleView1.getConditionList());
            }
        }
        return ResultUtil.success(filterRuleViewList);
    }
}
