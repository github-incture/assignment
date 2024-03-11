sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.Sample3", {
      onInit: function () {
        var oModel = new JSONModel(
          [
            {
              name: "list1",
              count: 10
            },
            {
              name: "list1",
              count: 10
            },
            {
              name: "list1",
              count: 10
            },
            {
              name: "list1",
              count: 10
            },
            {
              name: "list1",
              count: 10
            },
          ]
        )
        this.getView().setModel(oModel, "data");
      },
      onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteSample2")
      }
    });
  }
);
