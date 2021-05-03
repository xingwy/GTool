/**
 * 协议约定模型文件
 */

declare namespace Protocols {

    // 网关创建账户
    const enum CreateUserFields {
        account = 0,
        password = 1,
        name = 2,
        sex = 3,
    }
    type CreateUser = [string, string, string, number];

    // 网关登录验证
    const enum GatewayLoginAuthFields {
        account = 0,
        password = 1,
    }
    type GatewayLoginAuth = [string, string];

    // 登录中心服返回
    const enum LoginCenterReplyFields {
        code = 0,
    }
    type LoginCenterReply = [number];

    // 创建账号返回（TO Center）
    const enum CreateUserToCenterReplyFields {
        code = 0,
    }
    type CreateUserToCenterReply = [number];

}