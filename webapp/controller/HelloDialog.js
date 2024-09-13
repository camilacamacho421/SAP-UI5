sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function(ManagedObject, Fragment, syncStyleClass) {
    "use strict"

    return ManagedObject.extend("sap.ui.walkthrough.controller.HelloDialog", {
        constructor: function(oView) {
            this._oView = oView
        },

        exit: function() {
            delete this._oView;
        },

        open: function() {
            var oView = this._oView;

            //crear el dialogo
            if(!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function() {
                        oView.byId("helloDialog").close();
                    }
                }
            //cargar el fragmento XML de forma asincrónica
            Fragment.load({
                id: oView.getId(),
                name: "sap.ui.demo.walkthrough.view.HelloDialog",
                controller: oFragmentController
            }).then(function(oDialog){
                //conectar el diálogo a la vista raíz del componente
                oView.addDependent(oDialog);
                //forward compact/cozy style into the dialog
                syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                oDialog.open();
            })
            }else{
                oView.byId("helloDialog").open();
            }

        }
    });
});