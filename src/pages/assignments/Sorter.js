var diffDict = {
    Easy : 1,
    Medium : 2,
    Hard : 3
}

export default class Sorter{

    constructor(input){
        this.tasks = input;
    }

    Rater(Days, Time, Diff){  //assigns a priority rater for each task.

            console.log(Days);
        Days = this.calculateDayDifference(Days);
        Time = this.getTotalHours(Time);

        Diff = diffDict[{Diff}];
        Days = (Days <= 0) ? .1 : Days;

        
        var output = (Time * Diff * (1/Days));
        console.log(Days);
        return output;
    }

    AddRatings(){ //add the rating on the end of each element
        for (let i = 0; i < this.tasks.length; i++) {
            this.tasks[i].push( {
                key: "Rating", 
                value: this.Rater(this.tasks[i]["dueDate"], this.tasks[i]["dueTime"], this.tasks[i][""])
            });
        }
    }

    calculateDayDifference(date1) {
        // Convert strings to Date objects
        const d1 = new Date(date1);
        const d2 = new Date();
    
        // Calculate the difference in time
        const timeDifference = Math.abs(d2 - d1);
    
        // Convert time difference to days
        const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return dayDifference;
    }

     getTotalHours(time) {
        // Split the time string into its components
        console.log(time)
        String(time);
        const [timePart, meridian] = time.split(' ');
        var d = new Date();
    
        let [hours, minutes] = timePart.split(':').map(Number);
    
        // Convert hours to 24-hour format
        if (meridian === 'PM' && hours !== 12) {
            hours += 12;
        } else if (meridian === 'AM' && hours === 12) {
            hours = 0;
        }
    
        // Calculate total hours as a fraction
        const totalHours = hours + (minutes / 60);
        return totalHours-d.getHours();
    }
    

    Sort(){ //sorts each tasks according to the rating
        this.AddRatings()
        this.tasks.sort((a, b) => b["Rating"] - a["Rating"]);
        return this.tasks;
    }     
}