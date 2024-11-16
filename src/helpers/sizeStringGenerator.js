// maak een functie die het aantal inches omzet naar ".. inches ((afgerond(omgerekend))cm)
function sizeString(number) {
    return `${number} inches (${(Math.round(number*2.54))}cm) `;
}
 // maak een functie die voor elk item uit de array
export function size(tv) {
    // begin met het eerste item uit de size-array
    let sizeStringFull = sizeString(tv.availableSizes[0]);
    // voeg daar voor elk volgende item hetzelfde toe met tussen-|
    for (let i = 1; i < tv.availableSizes.length; i++) {
        sizeStringFull = sizeStringFull + `| ${sizeString(tv.availableSizes[i])}`
    }
    return sizeStringFull;
}
//console.log(size());