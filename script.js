var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function openCanvas(){
document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}

