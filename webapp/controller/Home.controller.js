sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.incture.project1.controller.Home", {
            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/countriesExtendedCollection.json"));
                console.log(oModel)
                var oData={
                    sample:[
                        "one",
                        "two",
                        "three"
                    ]
                }
                // var oModel=new JSONModel(oData) ;
                // this.getView().setModel(oModel) ;
            },
            onPress(){
                this.getOwnerComponent().getRouter().navTo("RouteSample")
            }
        });
    });
