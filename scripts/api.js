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
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: stringified,
      success: callback,
    });
  };
  return {
    getItems,
    createItem,
  };
}());
