import { number, boolean, string, tuple, array } from "../struct/base";

export const Account = tuple(
    "Account",
    [
        string("account", "账号"),
        string("password", "密码"),
        number("uid", "用户唯一ID"),
    ],
    "账号模型",
)

export const Accounts = tuple(
    "Accounts",
    [
        array(Account)("list", "用户唯一ID", Account),
    ],
    "账号模型集合",
    "AccountMgr",
)

export const UserSocial = tuple(
    "UserSocial",
    [
        string("name", "姓名"),
        number("level", "等级"),
        number("sex", "性别"),
    ],
    "玩家人物模型",
    "UserSocial",
)

export const Human = tuple(
    "Human",
    [
        
    ],
    "玩家人物模型",
    "Human",
)

export const Bag = tuple(
    "Bag",
    [
        
    ],
    "背包模型",
    "Bag",
)
