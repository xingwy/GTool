import { Register } from "./base/protocols";
import { number, boolean, string } from "../struct/base";

Register("CreateUser",
    [
        string("account"),
        string("password"),
        string("name"),
        number("sex"),
    ]
);