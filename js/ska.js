window.trax = {
  init: function(callback) {
    console.log('ska loaded!');
    if (typeof(callback) === 'function') {
      callback(null, true);
    }
  }
};
