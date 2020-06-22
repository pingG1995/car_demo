package com.example.webservice.mapper;

import com.example.webservice.view.FilterRuleView;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author xsm
 * @version 1.0
 * @date 2020/6/19 11:23
 */
@Component
public interface TestMapper {

    /**
     * 获取过滤器列表
     * @param
     */
    List<FilterRuleView> getFilter();
}
