sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/UIComponent"
  ],
  function (Controller, JSONModel, MessageToast,UIComponent) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.Users", {
      onSelectUser: function (oEvent) {
        var oItem = oEvent.getParameter("listItem") || oEvent.getSource();
        var sUserId = oItem.getBindingContext().getProperty("id");
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("RouteUserDetails", {
          userId: sUserId
        });
      }
    });
  }
);
