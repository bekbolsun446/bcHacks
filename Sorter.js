export default class Sorter{

    constructor(input){
        this.tasks = input;
    }

    Rater(Diff, Time, Days){  //assigns a priority rater for each task.
        Days = (Days <= 0) ? .1 : Days;
        
        var output = (Time * Diff * (1/Days));
        console.log(Days);
        return output;
    }

    AddRatings(){ //add the rating on the end of each element
        for (let i = 0; i < this.tasks.length; i++) {
            this.tasks[i].push(this.Rater(this.tasks[i][1], this.tasks[i][2],this.tasks[i][3]));
        }

        
    }

    Sort(){ //sorts each tasks according to the rating
        this.AddRatings()
        this.tasks.sort((a, b) => b[this.tasks.length-1] - a[this.tasks.length-1]);
        return this.tasks;
    }     
}