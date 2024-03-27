sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
  ],
  function (Controller, JSONModel, MessageToast) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.UserDetails", {
      onInit: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("RouteUserDetails").attachPatternMatched(this._onObjectMatched, this);
      },

      _onObjectMatched: function (oEvent) {
        var sUserId = oEvent.getParameter("arguments").userId;
        // Use sUserId to fetch user details and bind to the view
        // console.log(sUserId)
        this._loadUserData(sUserId);
      },

      _loadUserData: function (sUserId) {
        // Example: Assuming you have a JSONModel set on your view or component
        var oModel = this.getView().getModel();
        var oUserData = oModel.getProperty("/users").find(user => user.id == sUserId);
        if (oUserData) {
          var oUserModel = new sap.ui.model.json.JSONModel(oUserData);
          this.getView().setModel(oUserModel, "userDetails");
        }
      }

    });
  }
);
