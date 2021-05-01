import { number, boolean, string, tuple, array } from "../struct/base";

export const Account = tuple(
    "Account",
    [
        string("account", "账号"),
        string("password", "密码"),
        string("uid", "用户唯一ID"),
    ],
    "账号模型"
)

export const Accounts = tuple(
    "Accounts",
    [
        array(Account)("uid", "用户唯一ID", Account),
    ],
    "账号模型集合"
)