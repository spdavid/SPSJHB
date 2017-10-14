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
//# sourceMappingURL=HockeyPlayer.js.map