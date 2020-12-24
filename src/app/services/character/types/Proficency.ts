export class Proficency_c {
    /**
     * @param lab html label/name of proficency level
     * @param sbp sum of all available base points
     * @param mbp max amount of points that can be put into one basevalue
     * @param stp sum of all available talent points
     * @param mtp max amount of points that can be put into one talent
     */
    constructor(lab: string, sbp: number, mbp: number, stp: number, mtp: number) {
        this.label = lab;
        this.SumBasePoints = sbp;
        this.MaxBasePoints = mbp;
        this.SumTalentPoints = stp;
        this.MaxTalentPoints = mtp;
    }

    public label: string;

    public SumBasePoints: number;
    public MaxBasePoints: number;

    public SumTalentPoints: number;
    public MaxTalentPoints: number;
}

export function get_proficencies(): Array<Proficency_c> {
    return new Array(
        new Proficency_c("Kümmerlich",       65,   9, 100,  9),
        new Proficency_c("Unerfahren",       75,  11, 155, 11),
        new Proficency_c("Durchschnittlich", 80,  13, 170, 13),
        new Proficency_c("Erfahren",         85,  14, 200, 14),
        new Proficency_c("Kompetent",        90,  15, 240, 15),
        new Proficency_c("Meisterlich",      95,  17, 300, 17),
        new Proficency_c("Brillant",        110,  19, 350, 20),
    );
}
