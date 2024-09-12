sap.ui.define([
    "../localService/mockserver"
], function (mockserver) {
    "use strict";

    // inicializar el servidor
    mockserver.init();

    sap.ui.require(["sap/ui/core/ComponentSupport"])
})