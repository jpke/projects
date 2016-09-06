$(document).ready(function() {
  $('#js-shopping-list-form').submit(function(event) {

    event.preventDefault();
    //console.log($('#shopping-list-entry').val());
    // works - alert("new item submitted");
    $('.shopping-list').append(
      "<li>" +
      "<span class='shopping-item'>" + $("#shopping-list-entry").val() + "</span>" +
      '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      "</li>"
      );
  });
});