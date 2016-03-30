sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "x/y/id/model/models"
], function (UIComponent, JSONModel, ResourceModel, ModelHelper) {
   "use strict";

   return UIComponent.extend("x.y.id.Component", {

      metadata: {
         manifest: "json"
      },

      init: function () {
         // call the base component's init function
         UIComponent.prototype.init.apply(this, arguments);

        this.setModel(ModelHelper.createUserModel(), "User");

        this.setModel(ModelHelper.createShellModel(), "Shell");

         // create the views based on the url/hash using routing
         //this.getRouter().initialize();
      },

      destroy: function () {
         // call the base component's destroy function
         UIComponent.prototype.destroy.apply(this, arguments);
      }

   });
});
