import { number, boolean, string, register, tuple, array } from "../../struct/base";

let WorldCode = 0x300000;

export const LoginWorld = register("LoginWorld", WorldCode, [
    number("uid", "用户ID"),
    string("name", "姓名"),
    number("sex", "性别"),
], "登录到世界服");

export const SendChat = register("SendChat", WorldCode, [
    number("sender", "发送者"),
    number("channel", "频道"),
    number("receiver", "接收者ID, 发送给指定的人使用"),
    string("content", "聊天内容"),
], "聊天消息");

export const CenterSendToWorld = register("CenterSendToWorld", WorldCode, [
    number("code", "代码"),
], "中心服发往世界服");

export const WaitWorldSendToCenterReply = register("WaitWorldSendToCenterReply", WorldCode, [
    number("code", "代码"),
], "中心服发往世界服");

export const WaitCenterSendToWorld = register("WaitCenterSendToWorld", WorldCode, [
    number("code", "代码"),
], "中心服发往世界服 wait协议");
