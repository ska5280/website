window.ska5280 = {
  init: function(callback) {
    //console.log('ska loaded!');
    if (typeof(callback) === 'function') {
      callback(null, true);
    }
  }
};

// Clean up remove dates
// Since the web pages are prebuilt, the show data will only be removed when the site is regenerated, this removes shows in the past on the client side
var removeDates = function() {
  var currentRow, todayDate = new Date(),
    removalList = [];
  console.log('removing', parseInt(todayDate.getFullYear().toString() + (0 + (todayDate.getMonth() + 1).toString()).substr(-2) + (0 + todayDate.getDate().toString()).substr(-2), 10));
  if ($('.row.show-list-row').length > 0) {
    for (var i = 0; i < $('.row.show-list-row').length; i++) {
      currentRow = $('.row.show-list-row')[i];
      console.log('cr', currentRow, currentRow.attributes.removeDate);
      if (currentRow.attributes.removeDate) {
        var dateNumber = parseInt(currentRow.attributes.removeDate.value, 10),
          todayNumber = parseInt(todayDate.getFullYear().toString() + (0 + (todayDate.getMonth() + 1).toString()).substr(-2) + (0 + todayDate.getDate().toString()).substr(-2), 10);
        if (todayNumber > dateNumber) {
          currentRow.style.background = 'red';
          removalList.push(currentRow);
          //currentRow.remove();
        }
      }
    }
    if (removalList.length > 0) {
      for (var j = 0; j < removalList.length; j++) {
        removalList[j].remove();
      }
    }
  }
};

$(document).ready(function() {
  removeDates();
});
