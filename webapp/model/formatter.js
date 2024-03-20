sap.ui.define([], function () {
    "use strict";
    return {
        colorChange: function (value) {
            if (value > 60000) {
                // this.getView.byId("")
                return "clr"; // Red equivalent
            } else if (value > 50000) {
                return "clr"; // Green equivalent
            } else {
                return "clr"; // Blue equivalent, for demonstration
            }
        }
    };
});
