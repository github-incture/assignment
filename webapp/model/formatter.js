// sap.ui.define(
//     [],
//     function () {
//         "use strict";
//         return {
//             colorChange: function (value) {
//                 // var color=""
//                 return value > 60000 ? 'red' : (value > 50000 ? 'green' : 'blue')
//             }
//         }
//     }
// )

sap.ui.define([], function () {
    "use strict";
    return {
        colorChange: function (value) {
            if (value > 60000) {
                return "Error"; // Red equivalent
            } else if (value > 50000) {
                return "Success"; // Green equivalent
            } else {
                return "Information"; // Blue equivalent, for demonstration
            }
        }
    };
});
