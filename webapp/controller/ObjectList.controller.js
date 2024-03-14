sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
  ],
  function (Controller, JSONModel, ODataModel) {
    "use strict";
    return Controller.extend("com.incture.project1.controller.ObjectList", {
      onInit: function () {
        const data = new JSONModel({
          products: [
            { "name": "Godiva Gold Box", "price": 420, "units": "USD" },
            { "name": "Ferrero Rocher", "price": 450, "units": "USD" },
            { "name": "Lindt Lindor Truffles", "price": 470, "units": "USD" },
            { "name": "Ghirardelli Assorted Squares", "price": 480, "units": "USD" },
            { "name": "Cadbury Dairy Milk Silk", "price": 490, "units": "USD" },
            { "name": "Toblerone", "price": 420, "units": "USD" },
            { "name": "Hershey's Kisses", "price": 430, "units": "USD" },
            { "name": "Kit Kat", "price": 440, "units": "USD" },
            { "name": "Snickers", "price": 450, "units": "USD" },
            { "name": "Twix", "price": 460, "units": "USD" },
            { "name": "M&M's", "price": 470, "units": "USD" },
            { "name": "Reese's Peanut Butter Cups", "price": 480, "units": "USD" },
            { "name": "Milky Way", "price": 490, "units": "USD" },
            { "name": "Skittles", "price": 400, "units": "USD" },
            { "name": "Starburst", "price": 410, "units": "USD" },
            { "name": "Haribo Goldbears", "price": 420, "units": "USD" },
            { "name": "Ferrero Rondnoir", "price": 430, "units": "USD" },
            { "name": "Lindt Excellence", "price": 440, "units": "USD" },
            { "name": "Cadbury Fruit and Nut", "price": 450, "units": "USD" },
            { "name": "Kinder Chocolate", "price": 460, "units": "USD" }
          ]
        }
        );
        console.log(data)
        this.getView().setModel(data)
      },
      onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteBinding")
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
      },
      sales:function(){
        this.getOwnerComponent().getRouter().navTo("RouteSales")
      }
    });
  }
);
