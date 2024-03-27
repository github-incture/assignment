sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/UIComponent"
  ],
  function (Controller, JSONModel, MessageToast,UIComponent) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.Login", {
      onLogin: function() {
        var oView = this.getView();
        var sUsername = oView.byId("usernameInput").getValue();
        var sPassword = oView.byId("passwordInput").getValue();
    
        if (sUsername && sPassword && sPassword.length >= 8) {
            // Redirect to welcome page with username as parameter
            this.getOwnerComponent().getRouter().navTo("RouteSplit", { username: sUsername });
        } else {
            if (sPassword.length < 8) {
                sap.m.MessageToast.show("Password must be at least 8 characters long");
            } else {
                sap.m.MessageToast.show("Username and password are required");
            }
        }
    }
    
    });
  }
);
