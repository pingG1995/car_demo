package com.example.webservice.view;

import com.example.webservice.entity.PropertyFilter;
import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 规则模型
 * @param
 */
@ApiModel(value = "FilterRuleView")
@Data
public class FilterRuleView implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 规则id
     */
    private String id;
    /**
     * 规则名称
     */
    @Size(max = 64, message = "规则名称长度不能超过64")
    @NotNull(message = "规则名称不为空")
    private String name;
    /**
     * 启用、停用
     */
    private Short enable = 1;
    /**
     * 创建人
     */
    private String creator;
    /**
     * 修改人
     */
    private String modifier;
    /**
     * 创建人电话
     */
    private String creatorPhoneNum;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 修改时间
     */
    private Date modifyTime;
    /**
     * 规则内容
     */
    private String ruleContext;
    /**
     * 过滤方式
     */
    private String filter;
    /**
     * 规则匹配条件
     */
    private List<PropertyFilter> conditionList;
}
