import { number, boolean, string, register, tuple } from "../../struct/base";

export const Create = register("Create", "/user/Create", [
    string("account", "账号"),
    string("password", "密码"),
    string("name", "姓名"),
    number("sex", "性别"),
], "客户端创建账号");

export const Login = register("Login", "/user/Login", [
    string("account", "账号"),
    string("password", "密码"),
], "客户端登录账号");