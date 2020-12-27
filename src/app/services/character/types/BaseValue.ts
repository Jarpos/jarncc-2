export class BaseValue_c {
    /**
     * @param n name
     * @param v value
     * @param e explanation
     */
    constructor(n: string = "", v: number = 0, e: string = "") {
        this.name = n;
        this.value = v;
        this.explanation = e;
    }

    private _name: string = "";
    public get name(): string { return this._name; }
    public set name(n: string) {
        if (n.length <= 256) {
            this._name = n;
        }
    }

    private _value: number = 0;
    public get value(): number { return this._value; }
    public set value(v: number) {
        if (v >= 0 && v <= 20) {
            this._value = v;
        }
    }

    private _explanation: string = "";
    public get explanation(): string { return this._explanation; }
    public set explanation(e: string) {
        if (e.length <= 512) {
            this._explanation = e;
        }
    }
}

export function get_base_values(): BaseValue_c[] {
    return [
        new BaseValue_c("Kraft",            0, "Die Stärke des Charakters"),
        new BaseValue_c("Gesundheit",       0, "Die Körperliche Gesundheit"),
        new BaseValue_c("Flinkheit",        0, "Wie Agil der Charakter ist"),
        new BaseValue_c("Fingerfertigkeit", 0, "Geschicklichkeit des Charakters"),
        new BaseValue_c("Charisma",         0, "Wie gut mit Worten der Charakter ist"),
        new BaseValue_c("Intellekt",        0, "Die Grundintelligenz des Charakters"),
        new BaseValue_c("Weisheit",         0, "Angeignetes Wissen des Charakters"),
        new BaseValue_c("Tapferkeit",       0, "Wie Tapfer der Charakter ist"),
    ];
}

// This is quite dumb, I really should find a better way to do this...
export function get_base_values_index(): Map<string, number> {
    return new Map([
        ["KR", 0],
        ["GH", 1], ["GE", 1], // Second one, in case I'm dumb
        ["FL", 2],
        ["FF", 3], ["FI", 3], // Second one, in case I'm dumb
        ["CH", 4],
        ["IN", 5],
        ["WE", 6],
        ["TA", 7],
    ]);
}
