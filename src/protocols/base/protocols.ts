class Protocols {
    private static _instance: Protocols = new Protocols();
    public static get instance(): Protocols {
        return this._instance;
    }

    private _protocols: Array<any>;
    constructor() {
        this._protocols = new Array<any>();
    }

    public register(name: string, typle: any): void {
    }
    public export(): void {
        console.log(this._protocols);
    }
}

export const Register = Protocols.instance.register.bind(Protocols.instance)
export const Export = Protocols.instance.export.bind(Protocols.instance)
