sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
  ],
  function (Controller, JSONModel, ODataModel) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.XMLBinding", {
      onInit: function () {
        console.log("hello")
       
  },
  onPress: function () {
    this.getOwnerComponent().getRouter().navTo("")
  }
    });
  }
);
