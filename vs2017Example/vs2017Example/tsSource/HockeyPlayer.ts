namespace myApp {
    export class HockeyPlayer {
        Name: string;
        Birthday: Date;
        Position: string;
        ShirtNumber: number;
 
        constructor(name: string, birthday: Date,
            position: string, shirtnumber: number ) {
            this.Name = name;
            this.Birthday = birthday;
            this.Position = position;
            this.ShirtNumber = shirtnumber;
        } 

        GetAge(): number {
          
            let today = new Date();
            return today.getFullYear() - this.Birthday.getFullYear();
            

        }
    }

}
