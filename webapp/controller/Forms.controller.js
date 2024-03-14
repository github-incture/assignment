sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.incture.project1.controller.Forms", {
            onInit: function () {

            },
            onSubmit: function () {
                var name = this.getView().byId("name").getValue();
                var title = this.getView().byId("title").getValue();
                var desc = this.getView().byId("desc").getValue();
                if (name === "") { 
                    this.getView().byId("name").setValueState("Error");
                    this.getView().byId("name").setValueStateText("Error");
             }
            }
        });
    });
