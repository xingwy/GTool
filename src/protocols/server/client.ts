import { number, boolean, string, register, tuple } from "../../struct/base";

let ClientCode = 0x900000;

export const AuthUserLoginReply = register("AuthUserLoginReply", ClientCode, [
    number("code", "返回码"),
], "用户登录返回");

export const CreateUserReply = register("CreateUserReply", ClientCode, [
    number("code", "返回码"),
], "创建用户返回");

export const SendChatReply = register("SendChatReply", ClientCode, [
    number("code", "返回码"),
], "聊天返回");
