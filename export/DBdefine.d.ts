/**
 * 数据库字段段映射模型文件
 */

 declare namespace DBModel {

    // 账号模型
    const enum AccountFields {
        account = 0,  // 账号
        password = 1,  // 密码
        uid = 2,  // 用户唯一ID
    }
    type Account = [string, string, string];

    // 账号模型集合
    const enum AccountsFields {
        uid = 0,  // 用户唯一ID
    }
    type Accounts = [Array<Account>];

}