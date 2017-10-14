var myApp;
(function (myApp) {
    var HockeyPlayer = (function () {
        function HockeyPlayer(name, birthday, position, shirtnumber) {
            this.Name = name;
            this.Birthday = birthday;
            this.Position = position;
            this.ShirtNumber = shirtnumber;
        }
        HockeyPlayer.prototype.GetAge = function () {
            var today = new Date();
            return today.getFullYear() - this.Birthday.getFullYear();
        };
        return HockeyPlayer;
    }());
    myApp.HockeyPlayer = HockeyPlayer;
})(myApp || (myApp = {}));
var hockeyPlayer = new myApp.HockeyPlayer("David", new Date("1979-06-25"), "Goalie", 12);
var age = hockeyPlayer.GetAge();
console.log(hockeyPlayer);
console.log("The player is " + age + " years old");
console.log("The player is " + age + " years old");
jQuery(document).ready(function () {
    var html = "<div>\n                    <div>Name: " + hockeyPlayer.Name + "</div>\n                    <div>Position: " + hockeyPlayer.Position + "</div>\n                </div>";
    var astring = "salkfja\u00F6sld " + hockeyPlayer.Name + " fja\u00F6lsdjf";
    jQuery("#results").html(html);
});
//# sourceMappingURL=main.js.map