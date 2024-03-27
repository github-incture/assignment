sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.incture.project1.controller.Split", {
      onInit: function() {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("RouteSplit").attachPatternMatched(this._onRouteMatched, this);
      },
  
      onAfterRendering: function () {
        var oSplitCont = this.getSplitContObj(),
          ref = oSplitCont.getDomRef() && oSplitCont.getDomRef().parentNode;
        if (ref && !ref._sapUI5HeightFixed) {
          ref._sapUI5HeightFixed = true;
          while (ref && ref !== document.documentElement) {
            var $ref = jQuery(ref);
            if ($ref.attr("data-sap-ui-root-content")) { 
              break;
            }
            if (!ref.style.height) {
              ref.style.height = "100%";
            }
            ref = ref.parentNode;
          }
        }
      },
      onListItemPress: function (oEvent) {
        var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
  
        this.getSplitContObj().toDetail(this.createId(sToPageId));
      },
      getSplitContObj: function () {
        var result = this.byId("SplitContDemo");
        if (!result) {
          Log.error("SplitApp object can't be found");
        }
        return result;
      },
      _onRouteMatched: function(oEvent) {
          var sUsername = oEvent.getParameter("arguments").username;
          var oModel = new JSONModel({
              username: sUsername
          });
          this.getView().setModel(oModel, "welcomeModel");
      },
      onLogout:function(){
        this.getOwnerComponent().getRouter().navTo("RouteLogin");
      }
  });
});
