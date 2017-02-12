module.exports = (function(){

  let _newData = [];

  let _validate = (data) => {
    for(var key in data) {
      if(data[key] == false) {
        return;
      }
    }
    _newData.push(data);
  };

  let _getData = () => {
    return _newData;
  }

  return {
    getData: _getData,
    validate: _validate
  }

})();

