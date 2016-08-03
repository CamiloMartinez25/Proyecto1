mongo = function(){
      var Mongo={};
      Mongo.get = function(url,callback){
        $.ajax({ url:url, type: "GET", contentType: "application/json", 
          success: function(dataBase){
            callback(dataBase);
          }
        });
      };
      Mongo.post = function(url, objeto){
        $.ajax( { url: url,
          data: JSON.stringify(objeto),
          type: "POST",
          contentType: "application/json" })
      };
      Mongo.put = function(url,objeto){
        $.ajax( { url: url,
          data: JSON.stringify({"$set" : objeto}),
          type: "PUT",
          contentType: "application/json" });    
      };
      Mongo.borrar = function(url){
        $.ajax( { url: url,
          type: "DELETE",
          async: true,
          timeout: 300000,
          success: function (data) { },
          error: function (xhr, status, err) { } });    
      };

      return Mongo;
}();
