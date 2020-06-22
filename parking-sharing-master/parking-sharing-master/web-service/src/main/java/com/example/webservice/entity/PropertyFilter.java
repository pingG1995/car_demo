package com.example.webservice.entity;

import lombok.Data;

import java.io.Serializable;


/**
 * @author  xsm
 * @date 2020年3月30日 上午21:18:14
 * @Description 属性过滤
 */
@Data
public class PropertyFilter implements Serializable {
	private static final long serialVersionUID = 1L;
	private String propertyName;//属性英文名称
	private String propertyLabel;//属性中文名称
	private String renderValue;// 字典值
	private String op;//符号
	private String dictName;//对应字典名称
	private String renderType;//类型字符串或枚举
}
