sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
      return BaseController.extend("com.incture.project1.controller.Sample2", {
        onInit: function() {
        },
        onPress:function(){
          this.getOwnerComponent().getRouter().navTo("RouteSample");
        },
        onSubmit:function(){
          var name = this.getView().byId("nameText").getValue();
          var model = this.getView().byId("modelText").getValue();
          var country = this.getView().byId("countryText").getValue();
          this.getOwnerComponent().getRouter().navTo("RouteSample3");
        },
      });
    }
  );
