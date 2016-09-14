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
    //reset form after submission
    $('#js-shopping-list-form')[0].reset();
      //could also use 'this'

    //this works, but leaves suggestion list displayed below form input
    //$('#js-shopping-list-form').trigger("reset");
  });

    $('.shopping-list').on("click", ".shopping-item-toggle", function(event) {
      $(this).parents("li").find(".shopping-item")
        .toggleClass("shopping-item__checked");
    });

  $('.shopping-list').on("click", ".shopping-item-delete", function(event) {
    $(this).parents("li").remove();
  });

});