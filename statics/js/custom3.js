(function($) {
    "use strict";
    
    $(document).ready(function() {
        $('#nav-expander').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        
        $('#nav-close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });

        $('[data-toggle="tooltip"]').tooltip();

        $('.carousel').carousel({
            interval: 4000
        });

        $("#preloader").delay(500).fadeOut();
        $(".preloader").delay(600).fadeOut("slow");

        $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                $('.dmtop').css({bottom:"25px"});
            } else {
                $('.dmtop').css({bottom:"-100px"});
            }
        });

        $('.dmtop').click(function() {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });
    });

    
    window.openCategory = function(evt, catName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(catName).style.display = "block";
        evt.currentTarget.className += " active";
    };

})(jQuery);