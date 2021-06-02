import { number, boolean, string, register, tuple } from "../../struct/base";

let GatewayCode = 0x100000;

export const CreateUser = register("CreateUser", GatewayCode, [
    string("account", "账号"),
    string("password", "密码"),
    string("name", "姓名"),
    number("sex", "性别"),
], "网关创建账户");

export const GatewayAuthLogin = register("GatewayAuthLogin", GatewayCode, [
    string("account", "账号"),
    string("password", "密码"),
], "网关登录验证");

export const LoginCenterReply = register("LoginCenterReply", GatewayCode, [
    number("code", "错误码"),
    number("uid", "用户ID"),
    string("name", "姓名"),
    number("sex", "性别"),
], "登录中心服返回");

export const CreateUserToCenterReply = register("CreateUserToCenterReply", GatewayCode, [
    number("code", "错误码"),
], "创建账号（TO Center）返回");

export const LoginWorldReply = register("LoginWorldReply", GatewayCode, [
    number("code", "错误码"),
], "登录世界服（TO World）返回");

