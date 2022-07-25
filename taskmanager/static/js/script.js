document.addEventListener('DOMContentLoaded', function() {
    // Sidenav Initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

document.addEventListener('DOMContentLoaded', function() {
  // Modal Initialisation
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});