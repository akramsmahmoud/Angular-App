(function(window){

    // check for touch
    if (Modernizr.touch) {

        // run the forEach on each figure element
        [].slice.call(document.querySelectorAll("figure")).forEach(function(el,i){

            // get close-caption button in variable
            var closeCaption = el.querySelector(".close-caption");

            // show the close-caption button
            classie.remove(closeCaption,"hidden");

            // check if the user moves a finger
            var fingerMove = false;
            el.addEventListener("touchmove",function(e){
                e.stopPropagation();
                fingerMove = true;
            });

            // always reset fingerMove to false on touch start
            el.addEventListener("touchstart",function(e){
                e.stopPropagation();
                fingerMove = false;
            });

            // add hover class if figure touchend and fingerMove is false
            el.addEventListener("touchend",function(e){
                e.stopPropagation();
                if (fingerMove == false) {
                    classie.add(el,"hover");
                }
            });

            // if close-caption button clicked, remove hover class
            closeCaption.addEventListener("touchend",function(e){
                e.preventDefault();
                e.stopPropagation();
                if (fingerMove == false) {
                    if (classie.has(el,"hover")) {
                        classie.remove(el,"hover");
                    }
                }
            });

        });

    }

})(window);