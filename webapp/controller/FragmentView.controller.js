sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
  ],
  function (Controller, JSONModel, MessageToast) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.FragmentView", {
      onInit: function () {
      },
      goBack: function () {
        this.getOwnerComponent().getRouter().navTo("RouteShow")
      }
    });
  }
);
