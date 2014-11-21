exports.topTags = function(request, response) {
  var query = new Parse.Query("Tag");
  query.limit(10);
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function() {
      response.error("tag fetch error");
    }
  });
}

