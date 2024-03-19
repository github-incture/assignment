/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/incture/project1/model/models",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, Device, models, ODataModel, JSONModel) {
        "use strict";

        return UIComponent.extend("com.incture.project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                var sDestination = this.getManifestEntry("/sap.app/dataSources/xmlDataNorthWind/uri");

                // create and set the OData model with the destination URI
                var oModel = new ODataModel(sDestination);

                this.setModel(oModel);

                // read data from the model to test retrieval
                oModel.read("/service", {
                    success: function (oData, oResponse) {
                        console.log("Data Retrieved:", oData);
                    },
                    error: function (oError) {
                        console.error("Error:", oError);
                    }
                });

                var myModel = new JSONModel("model/data.json");
                this.setModel(myModel);
                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);