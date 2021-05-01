import { number, boolean, string, tuple } from "../struct/base";

export const Account = tuple(
    "Account",
    [
        string("account", "账号"),
        string("password", "密码"),
        string("uid", "用户唯一ID"),
    ],
    "账号模型"
)