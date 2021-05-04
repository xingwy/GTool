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

    // 创建角色（To Center）
    const enum CreateUserToCenterFields {
        uid = 0,
        name = 1,
        sex = 2,
    }
    type CreateUserToCenter = [number, string, number];

    // 网关登录验证
    const enum LoginCenterFields {
        uid = 0,
    }
    type LoginCenter = [number];

    const enum GatewayProtocolCode {
        CreateUser = 0x100001,  // 网关创建账户
        GatewayLoginAuth = 0x100002,  // 网关登录验证
        LoginCenterReply = 0x100003,  // 登录中心服返回
        CreateUserToCenterReply = 0x100004,  // 创建账号返回（TO Center）
    }
    const enum CenterProtocolCode {
        CreateUserToCenter = 0x200001,  // 创建角色（To Center）
        LoginCenter = 0x200002,  // 网关登录验证
    }
    interface ProtocolsTuple {
        [GatewayProtocolCode.CreateUser]: CreateUser;
        [GatewayProtocolCode.GatewayLoginAuth]: GatewayLoginAuth;
        [GatewayProtocolCode.LoginCenterReply]: LoginCenterReply;
        [GatewayProtocolCode.CreateUserToCenterReply]: CreateUserToCenterReply;
        [CenterProtocolCode.CreateUserToCenter]: CreateUserToCenter;
        [CenterProtocolCode.LoginCenter]: LoginCenter;
    }
}