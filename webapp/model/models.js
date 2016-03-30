sap.ui.define([
		"sap/ui/model/json/JSONModel"
	], function (JSONModel) {
   "use strict";

   return {
      createUserModel: function () {
         var oData = {
           fullname: "Philipp Gembe",
           firstname: "Philipp",
           lastname:"Gembe",
           language:"DE",
           phone: "004915783351192",
           image: "sap-icon://person-placeholder"
         };

         var oModel = new JSONModel(oData);

         return oModel;
      },

      createShellModel:function(){
        var oData = {
           logo: jQuery.sap.getModulePath("sap.ui.core", '/') + "mimes/logo/icotxt_white_220x72_blue.png"
        };

        var oModel = new JSONModel(oData);

        return oModel;
      }

   };

});
