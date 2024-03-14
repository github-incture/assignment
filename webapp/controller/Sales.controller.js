sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
  ],
  function (Controller, JSONModel, ODataModel) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.Sales", {
      onInit: function () {
        const data = new JSONModel({
          products: [
            { "name": "Godiva Gold Box", "price": 67, "net": 80 },
            { "name": "Ferrero Rocher", "price": 75, "net": 90 },
            { "name": "Lindt Lindor Truffles", "price": 83, "net": 95 },
            { "name": "Ghirardelli Assorted Squares", "price": 90, "net": 100 },
            { "name": "Cadbury Dairy Milk Silk", "price": 98, "net": 105 },
            { "name": "Toblerone", "price": 67, "net": 80 },
            { "name": "Hershey's Kisses", "price": 70, "net": 85 },
            { "name": "Kit Kat", "price": 73, "net": 87 },
            { "name": "Snickers", "price": 75, "net": 88 },
            { "name": "Twix", "price": 77, "net": 90 },
            { "name": "M&M's", "price": 80, "net": 92 },
            { "name": "Reese's Peanut Butter Cups", "price": 83, "net": 95 },
            { "name": "Milky Way", "price": 85, "net": 97 },
            { "name": "Skittles", "price": 63, "net": 40 },
            { "name": "Starburst", "price": 65, "net": 45 },
            { "name": "Haribo Goldbears", "price": 67, "net": 50 },
            { "name": "Ferrero Rondnoir", "price": 70, "net": 55 },
            { "name": "Lindt Excellence", "price": 73, "net": 60 },
            { "name": "Cadbury Fruit and Nut", "price": 75, "net": 65 },
            { "name": "Kinder Chocolate", "price": 77, "net": 70 }
          ]
        }
        );
        console.log(data)
        this.getView().setModel(data)
      },
      onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteObjectList")
      },
      showDialog: function (oEvent) {
        var listPath = oEvent.getSource().getBindingContext().getPath();
        this.dialogBox ??= this.loadFragment(
          {
            name: "com.incture.project1.fragment.PriceFragment"
          }
        )
        this.dialogBox.then((dialog) => {
          dialog.open(); dialog.bindElement(
            {
              path: listPath
            }
          )
        })
      },
      closeDialog: function () {
        this.dialogBox.then(status => status.close())
      },
      submit: function () {
        var inputVal = this.getView().byId("value").getValue();
        var model = this.getView().getModel();
        var item = this.dialogBox.then(
          entity => entity.getBindingContext().getPath()
        )
        this.dialogBox.then(
          entity => {
            item.then(
              position => {
                var originalPrice = parseFloat(model.getProperty(position + "/price"));
                var discountedPrice = originalPrice - (originalPrice * (inputVal / 100));
                model.setProperty(position + "/price", discountedPrice.toFixed(0));
                this.getView().byId("value").setValue("")
                entity.close();
              }
            )
          }
        )
      }
    });
  }
);
