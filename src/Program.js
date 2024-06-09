import Sorter from "./Sorter.js";

var testINPUT = [// Diff, Time, Days
    ["english", 3, 2, 2],
    ["calculus", 2, 1,2],
    ["ap blox fruits practice test", 2000, 1000,1]
];
var output;


//set input from react data

export default function ReturnRankedTasks(input){  
    const sorterObj = new Sorter(input);
    output = sorterObj.Sort();

    console.log(output);
    return output
}


// ReturnRankedTasks(testINPUT);



