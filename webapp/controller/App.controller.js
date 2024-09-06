sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    
], function (Controller, MessageToast){
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        onShowHello : function() {
            //Lee el mensaje del modelo i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
    
            MessageToast.show(sMsg); //Muestra el mensaje en la parte de abajo y de una forma más linda
        } 
    });
});