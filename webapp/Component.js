sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("ui5.boilerplate.Component", {
            metadata : {
		          rootView: "ui5.boilerplate.view.App"
	},
      init : function () {
         UIComponent.prototype.init.apply(this, arguments);
      }
   });
});
