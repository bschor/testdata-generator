type Hero = {
    name: string;
    description: string;
}
/** This function helps you to have common test data from which you can learn
 *  @returns type Hero = {
    name: string;
    description: string;
}
*/
export function printHero(): Hero {
    const hero: Hero = {
        name: "Laura",
        description: "Invented this module"
    }
    return hero
  }