(function(window) {

    // Exit if the browser implements that event
    if ( "onhashchange" in window.document.body ) { return; }

    var location = window.location,
        oldURL = location.href,
        oldHash = location.hash;

    // Check the location hash on a 100ms interval
    setInterval(function() {
        var newURL = location.href,
            newHash = location.hash;

        // If the hash has changed and a handler has been bound...
        if ( newHash != oldHash && typeof window.onhashchange === "function" ) {
            // Execute the handler
            window.onhashchange({
                type: "hashchange",
                oldURL: oldURL,
                newURL: newURL
            });

            oldURL = newURL;
            oldHash = newHash;
        }
    }, 100);

})(window);
