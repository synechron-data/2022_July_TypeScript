"use strict";
var myApp;
(function (myApp) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDistance = function () {
            return Math.sqrt(this.x * this.x | this.y * this.y);
        };
        return Point;
    }());
    myApp.Point = Point;
})(myApp || (myApp = {}));
var Usage;
(function (Usage) {
    var point = new myApp.Point(2, 3);
    console.log(point.getDistance());
})(Usage || (Usage = {}));
//# sourceMappingURL=14_Namespaces.js.map