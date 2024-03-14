sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.Label", {
      onInit: function () {
      },
      onPress: function () {
        var labelID = this.getView().byId("label")
        if (!labelID.hasStyleClass("labelFontSize"))
          labelID.addStyleClass("labelFontSize")
        else
          labelID.removeStyleClass("labelFontSize")
      },
      next:function(){
        this.getOwnerComponent().getRouter().navTo("RouteBinding")
      }
    });
  }
);
