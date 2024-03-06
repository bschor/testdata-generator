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

    const heros = [
        {
            "name": "Claudia Goldin",
            "description": "she was awarded the Nobel Memorial Prize in Economic Sciences 'for having advanced our understanding of women's labor market outcomes'."
        },
        {
            "name": "Narges Mohammadi",
            "description": "she is an Iranian human rights activist, Nobel laureate and the vice president of the Defenders of Human Rights Center (DHRC)"
        }
    ];

    const randomNumber = Math.floor(Math.random() * heros.length);
    const hero: Hero = heros[randomNumber];
    return hero
  }