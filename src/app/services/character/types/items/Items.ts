import { ItemType, Item_c } from "./Item";
import { Weapon_c, WeaponType } from "./Weapon";

export function get_weapons(): Weapon_c[] {
    return [
    ];
}

export function get_items(): Item_c[] {
    const getApparel     = (n: string, c: number) => new Item_c(n, c, ItemType.Apparel);
    const getAnimal      = (n: string, c: number) => new Item_c(n, c, ItemType.Animal);
    const getAnimalExtra = (n: string, c: number) => new Item_c(n, c, ItemType.AnimalExtra);
    const getMessenger   = (n: string, c: number) => new Item_c(n, c, ItemType.Messenger);
    const getMercenary   = (n: string, c: number) => new Item_c(n, c, ItemType.Mercenary);
    const getFood        = (n: string, c: number) => new Item_c(n, c, ItemType.Food);
    const getTent        = (n: string, c: number) => new Item_c(n, c, ItemType.Tent);
    const getBackpack    = (n: string, c: number) => new Item_c(n, c, ItemType.Backpacks);
    const getBaseObj     = (n: string, c: number) => new Item_c(n, c, ItemType.BaseObject);
    const getAdvcObj     = (n: string, c: number) => new Item_c(n, c, ItemType.AdvancedObject);

    return [
        getApparel("Anzug",     2),
        getApparel("Kleid",     1.5),
        getApparel("Tunika",    1.5),
        getApparel("Stiefel",   1.5),
        getApparel("Hemd",      1),
        getApparel("Bluse",     1),
        getApparel("Umhang",    1),
        // ...

        getAnimal("Kampfpferd", 60),
        getAnimal("Reitpferd",  20),
        getAnimal("Weidepferd", 15),
        getAnimal("Pony",       8),
        // ...

        getAnimalExtra("Rüstung einfach",    100),
        getAnimalExtra("Rüstung schwer",     400),
        getAnimalExtra("Rüstung prachtvoll", 1000),
        getAnimalExtra("Satteltasche klein", 5),
        // ...

        getMessenger("Bote beritten (pro Tag)",   20),
        getMessenger("Bote unberitten (pro Tag)", 13),

        getMercenary("Söldner (Unerfahren) (pro Tag)",  30),
        getMercenary("Söldner (Erfahren) (pro Tag)",    60),
        getMercenary("Söldner (Meisterlich) (pro Tag)", 130),

        getFood("Tagesration karg",     0.5),
        getFood("Tagesration einfach",  1),
        getFood("Tagesration luxuriös", 3),

        getTent("Zelt 1 Person", 5),
        // ...

        getBackpack("Rucksack klein",   2),
        getBackpack("Rucksack moderat", 5),
        getBackpack("Rucksack groß",    10),

        getBaseObj("Feuerstein + Stahl", 0.5),
        getBaseObj("Laterne",            7),
        getBaseObj("Brennöl pro Stunde", 4),
        // ...

        getAdvcObj("Angel",              0.5),
        getAdvcObj("Angelköder",         0.1),
        getAdvcObj("Buch",               30),
        getAdvcObj("Fernrohr",           250),
        getAdvcObj("Fischernetz",        3),
        getAdvcObj("Flaschenzug",        4),
        getAdvcObj("Kletterausrüstung ", 15),
        // ...
    ];
}
