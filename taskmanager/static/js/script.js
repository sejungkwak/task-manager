document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let modals = document.querySelectorAll('.modal');
    let datepicker = document.querySelectorAll('.datepicker');
    let selects = document.querySelectorAll('select');

    M.Sidenav.init(sidenav);
    M.Modal.init(modals);
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {
            done: "Select"
        }
    });
    M.FormSelect.init(selects);
});