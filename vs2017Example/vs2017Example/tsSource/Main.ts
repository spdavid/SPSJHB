declare var somevar: any;


 

var hockeyPlayer = new myApp.HockeyPlayer("David", new Date("1979-06-25"), "Goalie", 12);

var age = hockeyPlayer.GetAge();

console.log(hockeyPlayer);


console.log("The player is " + age + " years old");
console.log(`The player is ${age} years old`);



jQuery(document).ready(function () {  
    var html = `<div>
                    <div>Name: ${hockeyPlayer.Name}</div>
                    <div>Position: ${hockeyPlayer.Position}</div>
                </div>`;

    var astring = `salkfjaösld ${hockeyPlayer.Name} fjaölsdjf`;

    jQuery("#results").html(html);
});

