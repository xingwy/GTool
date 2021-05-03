import { number, boolean, string, register, tuple } from "../../struct/base";

let GatewayCode = 0x100000;

export const CreateUser = register("CreateUser", 0, [
    string("account", "账号"),
    string("password", "密码"),
    string("name", "姓名"),
    number("account", "性别"),
]);

export const GatewayLoginAuth = register("GatewayLoginAuth", 0, [
    string("account", "账号"),
    string("password", "密码"),
]);

export const LoginCenterReply = register("LoginCenterReply", 0, [
    string("code", "错误码"),
]);
