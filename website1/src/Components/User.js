var User = (function() {
    var address = null;
  
    var getAddress= function() {
      return address;    // Or pull this from cookie/localStorage
    };
  
    var setAddress = function(name) {
      address = name;     
    };
  
    return {
      getAddress: getAddress,
      setAddress: setAddress
    }
  
  })();
  
  export default User;