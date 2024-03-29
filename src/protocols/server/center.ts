import { number, boolean, string, register, tuple } from "../../struct/base";

let CenterCode = 0x200000;

export const CreateUserToCenter = register("CreateUserToCenter", CenterCode, [
    number("uid", "角色ID"),
    string("name", "姓名"),
    number("sex", "性别"),
], "创建角色（To Center）");

export const LoginCenter = register("LoginCenter", CenterCode, [
    number("uid", "角色ID"),
], "网关登录验证");

export const WorldSendToCenter = register("WorldSendToCenter", CenterCode, [
    number("code", "代码"),
], "世界服发往中心服");

export const WaitWorldSendToCenter = register("WaitWorldSendToCenter", CenterCode, [
    number("code", "代码"),
], "世界服发往中心服");

export const WaitCenterSendToWorldReply = register("WaitCenterSendToWorldReply", CenterCode, [
    number("code", "代码"),
], "世界服发往中心服 reply");
