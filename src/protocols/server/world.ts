import { number, boolean, string, register, tuple } from "../../struct/base";

let WorldCode = 0x300000;

export const LoginWorld = register("LoginWorld", WorldCode, [
    number("uid", "用户ID"),
    string("name", "姓名"),
    number("sex", "性别"),
], "登录到世界服");
