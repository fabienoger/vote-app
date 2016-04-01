Modules.client.utils = {
  // Set .active class to HTML element
  setActive: function(idElmt) {
    // Get DOM elements
    var element = document.getElementById(idElmt);
    var mobileElement = document.getElementById("mobile-" + idElmt);
    var items = document.getElementsByClassName("item");

    // Remove class .active for all .item
    for(var i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }

    // Set .active class to element and "mobile-" + element
    element.classList.add("active");
    mobileElement.classList.add("active");
  },
  // Display one info panel with arguments idElmt(html), color, icon, message
  displayPanel: function(idElmt, type, icon, message) {
    var timeoutClearPanel;
    // Get DOM element
    var $elmt = document.getElementById(idElmt);
    // Clear panel
    function clearPanel(elmt) {
     elmt.innerHTML = '';
    }

    // Check if $elmt is empty
    if ($elmt.innerHTML) {
      clearTimeout(timeoutClearPanel);
    } else {
      // Launch timeoutClearPanel() in 7.5s
      timeoutClearPanel = setTimeout(clearPanel, 7500, $elmt);
    }

    // Insert panel
    $elmt.innerHTML = "<div class='ui floating message "
      + type + "'><i class='close icon'></i>"
      + "<div>"
      + "<i class='icon "
      + icon + "'></i>"
      + message + "</div>"
      + "</div>";

    // Initialize semantic-ui close
    $('.message .close')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;
  }
}
