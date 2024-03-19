sap.ui.define([
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Fragment, Controller, JSONModel) {
    "use strict";
    var selectedItemKey ;
    var PageController = Controller.extend("com.incture.project1.controller.Language", {

        onInit: function (oEvent) {

            // set explored app's demo model on this sample
            var myModel = new JSONModel("model/data.json");
            myModel.attachRequestCompleted(function () {
                this.byId('edit').setEnabled(true);
            }.bind(this));
            this.getView().setModel(myModel);
            this.getView().bindElement("/SupplierCollection/0");

            this._formFragments = {};

            // Set the initial form to be the display one
            this._showFormFragment("Display");
        },

        handleEditPress: function () {

            //Clone the data
            this._oSupplier = Object.assign({}, this.getView().getModel().getData().SupplierCollection[0]);
            this._toggleButtonsAndView(true);
        },

        handleCancelPress: function () {

            //Restore the data
            var oModel = this.getView().getModel();
            var oData = oModel.getData();

            oData.SupplierCollection[0] = this._oSupplier;

            oModel.setData(oData);
            this._toggleButtonsAndView(false);

        },
        handleLanguage: function (oEvent) {
            // var oFragment = sap.ui.xmlfragment("com.incture.project1.fragment.Change", this);
            // this.getView().addDependent(oFragment);
            selectedItemKey = oEvent.getParameter("selectedItem").getKey();
            // return (selectedItemKey)
        },
        test: function(oEvent){
            console.log(oEvent.getSource().getValue())
        },
        handleSavePress: function () {
            this._toggleButtonsAndView(false);
            sap.ui.getCore().getConfiguration().setLanguage(selectedItemKey);
            // console.log(selectedItemKey)
        },

        _toggleButtonsAndView: function (bEdit) {
            var oView = this.getView();

            // Show the appropriate action buttons
            oView.byId("edit").setVisible(!bEdit);
            oView.byId("save").setVisible(bEdit);
            oView.byId("cancel").setVisible(bEdit);

            // Set the right form type
            this._showFormFragment(bEdit ? "Change" : "Display");
        },

        _getFormFragment: function (sFragmentName) {
            var that = this;
            var pFormFragment = this._formFragments[sFragmentName],
                oView = this.getView();

            if (!pFormFragment) {
                pFormFragment = Fragment.load({
                    id: oView.getId(),
                    controller: this,
                    name: "com.incture.project1.fragment." + sFragmentName
                });
                this._formFragments[sFragmentName] = pFormFragment;
            }

            return pFormFragment;
        },

        _showFormFragment: function (sFragmentName) {
            var oPage = this.byId("page");

            oPage.removeAllContent();
            this._getFormFragment(sFragmentName).then(function (oVBox) {
                oPage.insertContent(oVBox);
            });
        }

    });

    return PageController;

});