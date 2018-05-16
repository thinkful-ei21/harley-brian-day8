'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/harley';
  const getItems = function(callback){
    //callback('api module works!');
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  const createItem = function(name, callback){
    const newItem = {name};
    const stringified = JSON.stringify(newItem);
    const ob = {
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: stringified,
      success: callback,
    };
    //console.log(ob);
    $.ajax(ob);
  };
  const updateItem = function(id, updateData, callback){
    const ob = {
      url: `${BASE_URL}/items/${id}`,
      method:'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
    };
    //console.log(ob);
    $.ajax(ob);
  };

  return {
    getItems,
    createItem,
    updateItem,
  };

}());
