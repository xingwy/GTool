#ifndef PROTOCOL_H
#define PROTOCOL_H

/**
 * 协议约定模型文件
 */

namespace Protocols {

    enum GatewayProtocolCode {
        CreateUser = 0x100001,  // 网关创建账户
        GatewayAuthLogin = 0x100002,  // 网关登录验证
        LoginCenterReply = 0x100003,  // 登录中心服返回
        CreateUserToCenterReply = 0x100004,  // 创建账号（TO Center）返回
        LoginWorldReply = 0x100005,  // 登录世界服（TO World）返回
    };

    enum CenterProtocolCode {
        CreateUserToCenter = 0x200001,  // 创建角色（To Center）
        LoginCenter = 0x200002,  // 网关登录验证
        WorldSendToCenter = 0x200003,  // 世界服发往中心服
        WaitWorldSendToCenter = 0x200004,  // 世界服发往中心服
        WaitCenterSendToWorldReply = 0x200005,  // 世界服发往中心服 reply
    };

    enum WorldProtocolCode {
        LoginWorld = 0x300001,  // 登录到世界服
        SendChat = 0x300002,  // 聊天消息
        CenterSendToWorld = 0x300003,  // 中心服发往世界服
        WaitWorldSendToCenterReply = 0x300004,  // 中心服发往世界服
        WaitCenterSendToWorld = 0x300005,  // 中心服发往世界服 wait协议
    };

    enum ClientProtocolCode {
        AuthUserLoginReply = 0x900001,  // 用户登录返回
        CreateUserReply = 0x900002,  // 创建用户返回
        SendChatReply = 0x900003,  // 聊天返回
    };

}

#endif // PROTOCOL_H