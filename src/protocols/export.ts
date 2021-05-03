import { Protocol } from "../struct/protocol";

class Cols {
    private static _instance: Cols = new Cols();
    public static get instance(): Cols {
        return this._instance;
    }

    private _protocols: Array<Protocol>;
    constructor() {
        this._protocols = new Array<Protocol>();
    }

    public register(protocol: Protocol): void {
        this._protocols.push(protocol);
    }
    public export(): void {
        console.log(this._protocols);
    }
}

