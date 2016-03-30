sap.ui.define([
	"jquery.sap.global",
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/resource/ResourceModel"
	], function (jQuery, Controller, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("x.y.id.controller.App", {
      onInit: function () {

      },
			toggelShellPane:function(oEvent){
				this.byId("idShell").setShowPane(!this.byId("idShell").getShowPane());
			}
   });
});
