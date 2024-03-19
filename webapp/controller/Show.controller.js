sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
  ],
  function (Controller, JSONModel, MessageToast) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.Show", {
      onInit: function () {
      },
      onPress: function () {
        this.dialogBox ??= this.loadFragment(
          {
            name: "com.incture.project1.fragment.FormFragment"
          }
        )
        this.dialogBox.then(
          dialog => {
            dialog.open()
          }
        )
      },
      next: function () {
        this.getOwnerComponent().getRouter().navTo("RouteFragView")
      },
      onSubmit: function () {
        MessageToast.show("Your input has been submitted");
        this.getView().byId("nameText").setValue("")
        this.getView().byId("contactText").setValue("")
        this.dialogBox.then(dialog => dialog.close())
      },
      closeDialog: function () {
        this.dialogBox.then(dialog => dialog.close())
      },
    });
  }
);
