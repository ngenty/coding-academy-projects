$(document).ready(function() {
  var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);
  // HASH# on load
  swapPages(location.hash.slice(1));

  $("#BATMAN").click(function(){
    instance.close();
  })

  $('#LICORNE').click(function(){
    instance.close();
  })

  // ACCESSIBILITY
  $("#ACCESSIBILITY").click(function() {
    $("<style>")
      .prop("type", "text/css")
      .html(`
    body {
      color: #000 !important;
    }
    a{
      color: #000 !important;
    }
    footer{
      color: #000 !important;
    }
    .white-text{
      color: #000 !important;
    }`)
      .appendTo("head");
    instance.close();
    $('.sidenav').sidenav();
  });

  // BATMAN/LICORNE
  $(window).on('hashchange', function() {
    console.log("[hashchange][url#] " + location.hash.slice(1));
    instance.close();
    $('.sidenav').sidenav();
    swapPages(location.hash.slice(1),instance);
    $('.sidenav').sidenav();
  });

});

function swapPages($var) {
  if ($var === "BATMAN") {
    $('body').children().each(function() {
      $(this).html($(this).html().replace(/licorne/g, 'batman'));
      $(this).html($(this).html().replace(/Licorne/g, 'Batman'));
      $(this).html($(this).html().replace(/red lighten-3/g, 'blue-grey lighten-2'));
    });
    $('#product_toy_content').text('Parfois discuter de son code peut mettre en évidence des erreurs, voici votre propre assistant personnel');
  }
  if ($var === "LICORNE") {
    $('body').children().each(function() {
      $(this).html($(this).html().replace(/batman/g, 'licorne'));
      $(this).html($(this).html().replace(/Batman/g, 'Licorne'));
      $(this).html($(this).html().replace(/blue-grey lighten-2/g, 'red lighten-3'));
    });
    $('#product_toy_content').text('Peluche de licorne très connue qui est apparue dans un dessin animé');
  }
}

// ARCHIVE
// https://stackoverflow.com/questions/14970708/detect-change-in-hash-value-of-url-using-javascript
// https://en.wikipedia.org/wiki/Zero-width_space (&#8203;)
