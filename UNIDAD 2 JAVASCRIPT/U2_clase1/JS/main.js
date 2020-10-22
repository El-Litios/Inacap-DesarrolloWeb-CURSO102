document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, {
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250',
            "Carlos": 'https://lh3.googleusercontent.com/proxy/x2d9PFzxivjmjMSW8XM6evLq7VpZfeTnQOrWCqg6x5MSlUwR-BIJ8of2lrLJMqts2_cNcN3DT2M1gzSF_DkD2kBAbH1Wk60nibjPeQ4hxSNbx9SOvSDaOm67eOj3fQ'
        },
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('#input-text');
    M.CharacterCounter.init(elems);
});