sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel",{
        onShowHello : function() {
            //Lee el mensaje del modelo i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
    
            MessageToast.show(sMsg); //Muestra el mensaje en la parte de abajo y de una forma más linda
        },
        onOpenDialog : function() {
            var oView = this.getView();
            //Crear un diálogo:
            if(!this.byId("helloDialog")){
                //Cargar asincronicamente fragmento XML
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: this
                }).then(function(oDialog){
                    //Conectar el diálogo a la vista raíz de este componente
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            }else{
                this.byId("helloDialog").open();
            }
        },
        onCloseDialog : function() {
            this.byId("helloDialog").close();
        }
    })    
})