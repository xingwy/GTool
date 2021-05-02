const enum AccountFields {
    account = 0,  // 账号
    password = 1,  // 密码
    uid = 2,  // 用户唯一ID
}
type Account = [string, string, string];

const enum AccountsFields {
    uid = 0,  // 用户唯一ID
}
type Accounts = [Array<Account>];

