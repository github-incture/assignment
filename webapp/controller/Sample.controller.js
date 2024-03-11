sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
      return BaseController.extend("com.incture.project1.controller.Sample", {
        onInit: function() {
        },
        onPress:function (){
          this.getOwnerComponent().getRouter().navTo("RouteSample2")
        },
      });
    }
  );
