
document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementsByClassName('tours-item__skidka');

    for (let i = 0; i < el.length; i++) {
        el[i].remove();
    }
});
