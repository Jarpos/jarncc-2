export type difficulties = 1 | 2 | 3 | 4;

export class Talent_c {
    /**
     * @param n name
     * @param d difficulty
     * @param a attributes
     * @param b basepoints value
     * @param expl explanation string
     * @param e extrapoints value
     */
    constructor(n: string = "", d: difficulties = 1, a: string[] = ["", "", ""], b: number = 0, expl: string = "", e: number = 0) {
        this.name = n;
        this._difficulty = d;
        this.attributes = a;
        this._basePoints = b;
        this.extraPoints = e;
        this.explanation = expl;
    }

    public name: string = "";
    public explanation: string = "";

    private _difficulty: difficulties = 1;
    public get difficulty(): string {
        // 65 is A, so we use +64 to force at least a 65
        return String.fromCharCode(this._difficulty + 64);
    }

    private _attributes: string[] = ["", "", ""];
    public get attributes(): string[] { return this._attributes; }
    public set attributes(a: string[]) {
        if (a.length === 3) {
            this._attributes = a;
        }
    }

    private _trained: boolean = false;
    public get trained(): boolean { return this._trained; }
    public set trained(b: boolean) { this._trained = b; }

    private _basePoints: number = 0;
    public get basePoints(): number { return this._basePoints; }

    private _extraPoints: number = 0;
    public get extraPoints(): number { return this._extraPoints; }
    public set extraPoints(e: number) {
        if (e <= 0) {
            this._extraPoints = 0;
        } else if (e >= 20 - this.basePoints) {
            this._extraPoints = 20 - this.basePoints;
        } else {
            this._extraPoints = e;
        }
    }

    public get cost(): number {
        return this._extraPoints * this._difficulty;
    }
    public get allPoints(): number {
        return this._extraPoints + this.basePoints;
    }
}


export function get_talents(): Talent_c[] {
    return [
        /* Social */
        new Talent_c("Wahrnemung"      , 3, ["IN", "IN", "WE"], 5, "Erklärung"),
        new Talent_c("Überzeugen"      , 3, ["CH", "CH", "IN"], 5, "Erklärung"),
        new Talent_c("Betören"         , 2, ["CH", "CH", "IN"], 0, "Erklärung"),
        new Talent_c("Einschüchtern"   , 2, ["CH", "CH", "GH"], 5, "Erklärung"),
        new Talent_c("Etikette"        , 2, ["CH", "WE", "IN"], 0, "Erklärung"),
        new Talent_c("Menschenkenntnis", 3, ["IN", "IN", "CH"], 0, "Erklärung"),
        new Talent_c("Verkleiden"      , 1, ["FL", "IN", "FI"], 5, "Erklärung"),
        new Talent_c("Ertragen"        , 4, ["KR", "GH", "GH"], 0, "Erklärung"),

        /* Handcraft */
        new Talent_c("Seefahrt"          , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Fahrwerk"          , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Handel"            , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Holzarbeit"        , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Steinarbeit"       , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Lebensmittelarbeit", 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Lederarbeit"       , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Malerei"           , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Metallarbeit"      , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Waffenarbeit"      , 3, ["KR", "FF", "WE"], 0, "Erklärung"),
        new Talent_c("Stoffarbeit"       , 3, ["KR", "FF", "WE"], 0, "Erklärung"),

        /* Game */
        new Talent_c("Weitsprung"       , 3, ["GH", "FL", "FL"], 0, "Erklärung"),
        new Talent_c("Glücksspiel"      , 1, ["IN", "FF", "FF"], 5, "Erklärung"),
        new Talent_c("Akrobatik"        , 3, ["FL", "FL", "GH"], 0, "Erklärung"),
        new Talent_c("Klettern"         , 2, ["FL", "GH", "GH"], 5, "Erklärung"),
        new Talent_c("Schwimmen"        , 2, ["FL", "GH", "GH"], 5, "Erklärung"),
        new Talent_c("Laufen"           , 2, ["FL", "FL", "GH"], 5, "Erklärung"),
        new Talent_c("Kraftakt"         , 3, ["KR", "KR", "KR"], 5, "Erklärung"),
        new Talent_c("Selbstbeherschung", 3, ["GH", "TA", "TA"], 0, "Erklärung"),
        new Talent_c("Singen"           , 3, ["FL", "TA", "FL"], 0, "Erklärung"),
        new Talent_c("Tanzen"           , 3, ["FL", "FL", "GH"], 5, "Erklärung"),
        new Talent_c("Täuschen"         , 3, ["FL", "FL", "FF"], 0, "Erklärung"),
        new Talent_c("Taschendiebstahl" , 3, ["FF", "FF", "TA"], 0, "Erklärung"),
        new Talent_c("Verbergen"        , 3, ["FF", "FL", "FL"], 5, "Erklärung"),
        new Talent_c("Reitverständnis"  , 3, ["WE", "FF", "TA"], 0, "Erklärung"),

        /* Nature */
        new Talent_c("Fährtensuche"  , 2, ["WE", "WE", "FL"], 0, "Erklärung"),
        new Talent_c("Fixieren"      , 2, ["KR", "KR", "TA"], 5, "Erklärung"),
        new Talent_c("Fischen"       , 1, ["WE", "IN", "GH"], 5, "Erklärung"),
        new Talent_c("Orientierung"  , 3, ["WE", "IN", "IN"], 5, "Erklärung"),
        new Talent_c("Überleben"     , 3, ["GH", "GH", "TA"], 0, "Erklärung"),
        new Talent_c("Fallen stellen", 3, ["WE", "IN", "TA"], 0, "Erklärung"),
        new Talent_c("Tiere Zähmen"  , 4, ["WE", "WE", "IN"], 0, "Erklärung"),

        /* Knowledge */
        new Talent_c("Medizin"        , 4, ["WE", "WE", "IN"], 0, "Erklärung"),
        new Talent_c("Tiermedizin"    , 4, ["WE", "WE", "IN"], 0, "Erklärung"),
        new Talent_c("Giftkunde"      , 4, ["WE", "WE", "WE"], 0, "Erklärung"),
        new Talent_c("Psychologie"    , 4, ["WE", "WE", "IN"], 0, "Erklärung"),
        new Talent_c("Jagdwissen"     , 4, ["WE", "WE", "TA"], 0, "Erklärung"),
        new Talent_c("Pflanzenkunde"  , 4, ["WE", "WE", "IN"], 0, "Erklärung"),
        new Talent_c("Tierkunde"      , 4, ["WE", "WE", "IN"], 0, "Erklärung"),
        new Talent_c("Geographie"     , 4, ["WE", "WE", "IN"], 0, "Erklärung"),
        new Talent_c("Historie"       , 4, ["WE", "WE", "WE"], 0, "Erklärung"),
        new Talent_c("Religionswissen", 4, ["WE", "WE", "WE"], 0, "Erklärung"),
        new Talent_c("Mechanik"       , 3, ["WE", "WE", "FF"], 0, "Erklärung"),
        new Talent_c("Legenden"       , 4, ["WE", "WE", "CH"], 0, "Erklärung"),
        new Talent_c("Astronomie"     , 4, ["WE", "WE", "IN"], 0, "Erklärung"),

        /* Fighting */
        new Talent_c("Turnierkampf"        , 3, ["  "], 5, "Erklärung"),
        new Talent_c("Showkampf"           , 2, ["  "], 5, "Erklärung"),
        new Talent_c("Kampf unter Wasser"  , 3, ["  "], 0, "Erklärung"),
        new Talent_c("Gladiatorenkampf"    , 3, ["  "], 0, "Erklärung"),
        new Talent_c("Kampf auf Fahrzeugen", 3, ["  "], 0, "Erklärung"),
        new Talent_c("Kriegsmaschinerie"   , 4, ["  "], 0, "Erklärung"),
    ];
}
