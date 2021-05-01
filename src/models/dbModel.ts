import { number, boolean, string } from "../struct/base";
import { tuple } from "../struct/tuple";

export const Account = tuple(
    "Account",
    [
        string("account", "账号"),
        string("password", "密码"),
        string("uid", "用户唯一ID"),
    ],
    "账号模型"
)