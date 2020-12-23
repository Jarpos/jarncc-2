export class CharInfo_c<T> {
    /**
     * @param n name
     * @param v value
     * @param e explanation
     */
    constructor(n: string, v: T, e: string = "") {
        this.name = n;
        this._value = v;
        this.explanation = e;
    }

    private _name: string = "";
    public get name(): string { return this._name; }
    public set name(n: string) {
        if (n.length <= 256) {
            this._name = n;
        }
    }

    private _value: T;
    public get value(): T { return this._value; }
    public set value(v: T) {
        this._value = v;
    }

    private _explanation: string = "";
    public get explanation(): string { return this._explanation; }
    public set explanation(e: string) {
        if (e.length <= 512) {
            this._explanation = e;
        }
    }
}


export function get_char_infos(): Map<string, CharInfo_c<string | number>> {
    return new Map<string, any>([
        ["name",       new CharInfo_c<string>("Name",        "")],
        ["age",        new CharInfo_c<number>("Alter",       0)],
        ["origin",     new CharInfo_c<string>("Herkunft",    "")],
        ["profession", new CharInfo_c<string>("Profession",  "")],
    ]);
}
