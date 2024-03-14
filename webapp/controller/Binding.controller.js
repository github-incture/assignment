sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.Binding", {
      onInit: function () {
        var oModel = new JSONModel(
          [
            { "id": 1, "name": "John Doe", "salary": 50000 },
            { "id": 2, "name": "Jane Smith", "salary": 52000 },
            { "id": 3, "name": "Alice Johnson", "salary": 55000 },
            { "id": 4, "name": "Bob Brown", "salary": 48000 },
            { "id": 5, "name": "Charlie Davis", "salary": 51000 },
            { "id": 6, "name": "Diana Evans", "salary": 53000 },
            { "id": 7, "name": "Evan Foster", "salary": 49500 },
            { "id": 8, "name": "Grace Green", "salary": 47000 },
            { "id": 9, "name": "Henry Hill", "salary": 54000 },
            { "id": 10, "name": "Isla Ingram", "salary": 58000 },
            { "id": 11, "name": "Jake Johnson", "salary": 60000 },
            { "id": 12, "name": "Kara Knight", "salary": 62000 },
            { "id": 13, "name": "Liam Lee", "salary": 61000 },
            { "id": 14, "name": "Mia Martin", "salary": 63000 },
            { "id": 15, "name": "Noah Nelson", "salary": 64000 },
            { "id": 16, "name": "Olivia Owens", "salary": 65000 },
            { "id": 17, "name": "Parker Phillips", "salary": 66000 },
            { "id": 18, "name": "Quinn Quinn", "salary": 67000 },
            { "id": 19, "name": "Ryan Reed", "salary": 68000 },
            { "id": 20, "name": "Sophia Smith", "salary": 69000 }
          ]
        )
        this.getView().setModel(oModel, "data");
      },
      onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteLabel")
      },
      next:function(){
        this.getOwnerComponent().getRouter().navTo("RouteObjectList")
      }
    });
  }
);
