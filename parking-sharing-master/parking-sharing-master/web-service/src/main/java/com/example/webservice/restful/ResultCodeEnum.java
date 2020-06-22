package com.example.webservice.restful;

/**
 * @author: cj
 * @create: 2018-04-11 10:21
 * @description:返回码定义
 **/
public enum ResultCodeEnum {

    UNKNOW_ERROR("00000","未知错误"),
    INDEX_ERROR("40001","索引不存在"),
    DATA_ERROR("00000","获取数据失败"),
    /* 成功状态码:10000 */
    SUCCESS("20000","成功"),
    /*未登录*/
    UN_LOGIN("11000","未登录"),

    /*未授权*/
    UN_AUTH("11101","未授权"),
    ONLY_NUMBERS("40001","容量只能为正整数"),
    /* 文件状态码:20001-29999 */
    EMPTY_FILE_ERROR("20001", "空文件"),
    ILLEGAL_FORMAT_ERROR("20002", "文件格式非法"),
    GET_FILE_STREAM_ERROR("20003", "文件流获取失败"),
    BLANK_CELL_ERROR("20004", "非空字段不允许为空"),
    FILE_TEMPLATE_ERROR("20005", "导入模板生成异常"),
    FILE_EXPORT_ERROR("20006", "文件导出失败"),
    FILE_IMPORT_ERROR("20007", "文件导入失败"),
    FILE_CONTENT_ERROR("20008", "文件导入失败,可能原因：① 存在不相关sheet表格; ② 缺少有效的key标记"),
    EXPORT_DATA_EXCEPTION("20009","导入数据不规范"),

    /* 数据状态码:30001-39999 */
    DATA_NON_EXISTENT("31001", "数据不存在"),
    DATA_ALREADY_EXISTENT("31002", "规则同名，请注意"),
    UNIFY_RULE_KEY_ALREADY_EXISTENT("31003", "标准化规则KEY已存在"),
    DATA_EXCEPTION("31004","数据异常"),
    FAILED_UPDATE("31005", "数据库更新错误"),
    REPEAT_SUBMIT("31006","重复提交"),
    RULE_NAME_NOT_NULL("31007","ruleName不为空!"),
    NETYPE_DATA_NON_EXISTENT("31008","当前网元无数据!"),
    RULE_MANAGER_NAME_TO_LONG("31009","规则梳理人超出输入限制(12个字符)!"),
    RULE_NAME_EXCEPTION("31010","规则名称不规范(内容为空或内含空字符串)"),
    LOGIC_NOT_RIGHT("31011","复杂逻辑表达式不正确，校验不通过!"),

    /* 参数错误:40001-49999 */
    PARAM_EMPTY("40001", "参数为空"),
    DATA_TIME_ERROR("40002", "开始时间和结束时间填写不正确(保证开始时间小于结束时间且结束时间大于当前时间)"),

    /* 接口错误:50001-59999 */
    //INSIDE_API_INVOKE_ERROR("50001", "内部接口调用异常"),
    //OUTSIDE_API_INVOKE_ERROR("50002", "外部接口调用异常"),
    //HTTP_REQUEST_METHOD_NOT_SUPPORTED("50003", "不支持的HTTP请求方法"),
    /* 系统异常 */
    SERVER_ERROR("50001", "server-error"),
    NOT_IMPLEMENTED("50002", "not-implemented"),
    NOT_SUPPORTED("50003", "not-supported"),
    STORAGE_ERROR("50004", "storage-error"),
    SERVICE_UNAVAILABLE("50005", "service-unavailable"),
    FS_SERVICE_ERROR("51001", "fs-service-error"),

    //TODO 统一模块的状态码，待整理
    /* 权限异常*/
    VALIDATE_FAILED("30001", "validate-failed"),
    AUTH_FAILED("30002", "auth-failed"),
    ACCESS_DENIED("30003", "access-denied"),

    /* 请求异常 */
    BAD_REQUEST("40001", "bad-request"),
    FORBIDDEN("40002", "forbidden"),
    NOT_FOUND("40003", "not-found"),
    ALREADY_EXIST("40004", "already-exist"),
    FS_OPERATION_ERROR("41001", "fs-operation-error"),
    FILE_NOT_EXIST("41002", "file-not-exist"),
    FILE_UPLOAD_ERROR("41003", "file-upload-error"),
    FILE_DOWNLOAD_ERROR("41004", "file-download-error"),
    FILE_IN_RESERVED_PATH("41005", "file-in-reserved-path"),



    /* 连接异常 */
    SOCKET_CLOSED("60001", "socket-closed"),
    SOCKET_EXPIRED("60002", "socket-expired"),
    FS_CONNECTION_ERROR("61001", "fs-connection-error")
    ;

    private final String code;

    private final String message;

    private ResultCodeEnum(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}