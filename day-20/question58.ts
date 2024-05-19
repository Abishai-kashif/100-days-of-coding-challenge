// Average Score Calculator


// defining a simple func that takes unlimited amount of scores & cal their avg
function calScoresAvg(...scores: number[]): number {
    return scores.reduce((acumm: number, val: number) => acumm + val ,0) / scores.length;
};

let avg: number = calScoresAvg(97 ,85 ,73 ,92 ,90); // passing some scores as arg


// logs the returned avg
console.log(avg); 
