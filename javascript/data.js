data = function(){
  var Data = {};
  Data.validar = function(dato1,dato2,dataBase){
    var index = null;
      for (var i = 0; i < dataBase.length; i++) {
        if (dataBase[i].userName === dato1 && dataBase[i].password === dato2) {
          index = i;
        }
      }
      return index;
  };
  Data.buscar = function(dato1,dato2,dataBase){
      var index = null;
      for (var i = 0; i < dataBase.length; i++) {
        if (dataBase[i].userName === dato1 || dataBase[i].email === dato2) {
          index = i;
        }
      }
      return index;
  };

  return Data;

}();