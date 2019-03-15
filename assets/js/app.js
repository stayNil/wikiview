$(document).ready(function() {

  // focus on input after DOM loads
  $('#search-input').focus();

  // event handler for 'enter'
  $('#search-input').keypress(function(e) {
    if (e.which === 13)
      $('#magnify').click();
  });

  $('#magnify').on('click', function() {
    var search = $('#search-input').val();
    var url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&gsrnamespace=0&gsrlimit=10&format=json&search=' + search;
    $.getJSON(url, function(json) {
      var parse = '';
      for (var i = 0; i < json[1].length; i++) {
        parse += "<a href='" + json[3][i] + "' target='_blank'><h2>" + json[1][i] + "</h2><p>" + json[2][i] + "</p></a>";
      }
      $('#wikiview').html(parse);
    });
  });
});
