 
 /* slider */
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        interval:10000
    });
});

/* modal */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        dismissible:false,
        outDuration:500
    });
});

/* dropdawn */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        coverTrigger:false,
        constrainWidth:false
    });
});

/* autocomplete nombre */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocompleteNombre');
    var instances = M.Autocomplete.init(elems, {
        data:{
            "Don Quijote de la Mancha": null,
            "El alquimista":null
        }
    });
});

/* autocomplete autor */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocompleteAutor');
    var instances = M.Autocomplete.init(elems, {
        data:{
            "Miguel de Cervantes":null,
            " Paulo Coelho":null
        }
    });
});

/* autocomplete categoría */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocompleteCategoría');
    var instances = M.Autocomplete.init(elems, {
        data:{
            "Novela de aventuras":null,
            "Libro de caballerías":null,
            "Novela realista":null,
            "Novela de aventuras":null,
            "Literatura fantástica":null,   
            "Novela esotérica":null
        }
    });
});
/* navbar small divice */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right' /* lugar desde donde se despliega el navbar */
    });
  });