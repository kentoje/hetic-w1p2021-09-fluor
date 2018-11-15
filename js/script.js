var ids = ['produit-1', 'produit-2', 'produit-3', 'button-read', 'button-read1'];
ids.forEach(function(id) {
  var element = document.getElementById(id);
  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.toggle('is-reached');
    },
    offset: '80%'
  });
}); 