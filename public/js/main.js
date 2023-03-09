/* =====================================================
Template Name   : Restora
Description     : Restaurant HTML5 Template
Author          : Themesland
Version         : 1.1
=======================================================*/
(function ($) {
    "use strict";

    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // wow init
    new WOW().init();


    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
    });

    $('.hero-slider').on('change.owl.carousel', function (event) {
        new WOW().init();
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        navText: [
            "<i class='icofont-long-arrow-left'></i>",
            "<i class='icofont-long-arrow-right'></i>"
        ],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            "<i class='icofont-long-arrow-left'></i>",
            "<i class='icofont-long-arrow-right'></i>"
        ],
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // special-offer-slider
    $('.special-offer-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");

        //content for mobile navbar
        if(window.innerWidth < 992){
        const newli = document.createElement("li");
        const newli2 = document.createElement("li");
        const newDiv = document.createElement("div");
    
        document.querySelector(".ulNav").append(newli);
        document.querySelector(".ulNav").append(newli2);
        document.querySelector(".ulNav").append(newDiv);
    
        newli.classList.add("text-center");
        newli2.classList.add("text-center");
        newDiv.classList.add("text-center");
        newDiv.classList.add("mt-2");
    
        newli.innerHTML = `<a class="nav-item2" href="/#contact"><button class="nav-item2">Contact For Quote</button></a>`;
        newli2.innerHTML = `<p class="mPrep">For Meal Prep Services Please Contact By Phone: &nbsp;</p><a class = "link-hover" href="tel:347-880-9223">(347)-880-9223</a>`;
        newDiv.innerHTML = `<a class = "link-hover" href="https://www.facebook.com/Themixedpotllc"><i class="fab fa-facebook-f ms-3 mx-3"></i></a>
        <a class = "link-hover" href="https://twitter.com/themixedpotllc"><i class="fab fa-twitter mx-3"></i></a>
        <a class = "link-hover" href="https://www.instagram.com/official_themixedpot"><i class="fab fa-instagram mx-3"></i></a>
        <a class = "link-hover" href="https://wa.me/13478809223"><i class="fab fa-whatsapp mx-3"></i></a>`;
        };
    
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // scroll to top
    $(window).scroll(function () {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });

    // countdown
    if ($('#countdown').length) {
        $('#countdown').countdown('2030/01/30', function (event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        });
    }


    // project filter
    $(window).on('load', function () {
        
        if(window.innerWidth > 945){
            document.querySelector(".menu-wrapper").style.height="1300px";
        };
        $('.filter-box2').remove();
        if( $(".filter-box").children().length > 0 ) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                  columnWidth: 2
                },
            });

            //Initial Menu Items which work with original html code
            //Uses the menu items originally created with html to create a dynamic menu that loads as soon as the page loads
            $('.initialMenuItem1').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1300px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="3050px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat1" style="text-align: center;">
                    <h1>Platters</h1>
                    <p class="menu-subtitle">Mixed Pot Platter Specials All Served With Complimentary Honey Butter Cornbread And A Drink</p><p>Any Global Entree With Any 2 Global Sides</p>
                </div>
                <div class="col-md-6 filter-item cat1 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Curry Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$23</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat1 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Taylor's Oxytail</h5>
                       </div>
                       <div class="menu-price">
                        <span>$35</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat1 cat1Item">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Brown Stew Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$22</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat1 cat1Item">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Curry Goat</h5>
                       </div>
                       <div class="menu-price">
                        <span>$26</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat1 cat1Item">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>K</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                       </div>
                       <div class="menu-price">
                        <span>$29</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat1 cat1Item">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Fried Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$24</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat1 cat1Item">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Turkey Wings</h5>
                       </div>
                       <div class="menu-price">
                        <span>$22</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat1 cat1Item">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">2 Fried Catfish Fillet</h5>
                       </div>
                       <div class="menu-price">
                        <span>$27</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat1 cat1Item">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>R</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">2 Of Errol's Roasted Beef Ribs (Brown Gravy Or BBQ Sauce)</h5>
                       </div>
                       <div class="menu-price">
                        <span>$34</span>
                       </div>
                    </div>
                </div>`);
            });

            $('.initialMenuItem2').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1000px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="2400px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat2" style="text-align: center;">
                    <h1>Entrees</h1>
                    <p class="menu-subtitle">Jamaica To The World Entrees Served With White Rice Or Rice And Peas & Steamed Veggies</p>
                </div>
                <div class="col-md-6 filter-item cat2 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Curry Chicken</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Medium</p>
                                    <p>$10</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$15</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat2 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Taylor's Oxtail</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Medium</p>
                                    <p>$22</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$27</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat2 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Juicy Jerk Chicken</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Medium</p>
                                    <p>$15</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$19</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat2 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Brew Stew Chicken</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Medium</p>
                                    <p>$10</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$15</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat2 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Curry Goat</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Medium</p>
                                    <p>$14</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$20</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat2 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>K</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Medium</p>
                                    <p>$19</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$25</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat2 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Jerk Or Mango Lime Salmon</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Medium</p>
                                    <p>$21</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$26</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.initialMenuItem3').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="700px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="1500px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat5" style="text-align: center;">
                    <h1>Salads</h1>
                    <p class="menu-subtitle">Mixed Pot Salad Fix Station</p>
                    <p>Add Jerk Or Crispy Chicken + $5, Salmon + $7, Steak + $10</p>
                </div>
                <div class="col-md-6 filter-item cat5 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Garden Explosion</h5>
                            <p>Seasonal Veggies With A Lettuce Medley, Tomato, Cucumber, And Onions</p>
                       </div>
                       <div class="menu-price">
                        <span>$12</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat5 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Mixed Pot Jamaican Slaw</h5>
                            <p>Fresh Made Cabbage Slaw With Bits Of Spices, Sweetness, And Bright Lime</p>
                       </div>
                       <div class="menu-price">
                        <span>$12</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat5 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Fruit Salad</h5>
                            <p>Cold And Crisp Fruit Salad With Plate</p>
                       </div>
                       <div class="menu-price">
                        <span>$10</span>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.initialMenuItem4').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1800px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="4800px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="text-center filter-item cat6">
                    <h1>Sides</h1>
                </div>
                <div class="col-md-6 filter-item cat6 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Plantain</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">JollOf Rice</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Fufu</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>R</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Rice And Peas</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Steamed Jasmine Rice</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Bonnie's Bussin Honey Butter Cornbread</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Miss P Macaroni And Cheese</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$8</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$12</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Steamed Cabbage</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Mixed Seasonal Sauteed Veggies</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Geneva's Potato Salad</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Mashed Potatoes</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Maple Yams</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Jamaican Slaw</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Macaroni Salad</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">French Fries</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat6 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Garlicky Sauteed String Beans</h5>
                       </div>
                       <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$8</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div> 
            </div>`);
            });

            $('.initialMenuItem5').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1570px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="4270px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="col-md-12 filter-item cat7 text-center">
                    <h1>Sandwiches</h1>
                    <p>Jumbo New Jersey Take, California Or Italian Sandwhiches</p><p>Make It A Combo + $3 (Extra Meat + $3)</p>
                        <p>Classic Fillings On A Loaded Hero "Take Sandwiches" Come With Fillings Sauteed In A Sweet And Savory Jersey Take Sauce With Onions and Peppers. "Italian" Sandwich Fillings Include Fries, Cheese, Mayo, Ketchup. "California Sandwiches" Have Luttuce, Tomato, & Onion</p>
                </div>
                <div class="col-md-6 filter-item cat7 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>Z</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Zaynab's Chicken N Take</h5>
                       </div>
                       <div class="menu-price">
                        <span>$8</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Steak N Take</h5>
                       </div>
                       <div class="menu-price">
                        <span>$9</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Fish N Take</h5>
                       </div>
                       <div class="menu-price">
                        <span>$8</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Salmon N Take</h5>
                       </div>
                       <div class="menu-price">
                        <span>$13</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Italian Hamburger</h5>
                       </div>
                       <div class="menu-price">
                        <span>$10</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Italian Cheeseburger</h5>
                       </div>
                       <div class="menu-price">
                        <span>$11</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Italian Fish</h5>
                       </div>
                       <div class="menu-price">
                        <span>$11</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Italian Crispy Shrimp</h5>
                       </div>
                       <div class="menu-price">
                        <span>$13</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Italian Cheesesteak</h5>
                       </div>
                       <div class="menu-price">
                        <span>$12</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">California Hamburger</h5>
                       </div>
                       <div class="menu-price">
                        <span>$10</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">California Cheeseburger</h5>
                       </div>
                       <div class="menu-price">
                        <span>$11</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">California Fish</h5>
                       </div>
                       <div class="menu-price">
                        <span>$12</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">California Crispy Shrimp</h5>
                       </div>
                       <div class="menu-price">
                        <span>$14</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat7 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">California Salmon Fillet</h5>
                       </div>
                       <div class="menu-price">
                        <span>$17</span>
                       </div>
                    </div>
                </div>    
            </div>`);
            });

            $('.initialMenuItem6').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1500px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="3600px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat8" style="text-align: center;">
                    <h1>Drinks</h1>
                    <p class="menu-subtitle">Mixed Pot Drinks $4</p>
                </div>
                <div class="col-md-6 filter-item cat8 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Iced Fruited Sorrel Tea</h5>
                            <p>Hibiscus With Hints Of Orange Apple And Pear</p>
                       </div>
                       <div class="menu-price">
                        <span>$4</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Peachy Island Punch</h5>
                            <p>Georgia Peach Meet A Cool Island Wave Of Flavor</p>
                       </div>
                       <div class="menu-price">
                        <span>$4</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat8 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Mixed Pot Crosstown</h5>
                            <p>Iced Sorrel & Black Tea</p>
                       </div>
                       <div class="menu-price">
                        <span>$4</span>
                        </div>
                    </div>
                </div>
                <div class="filter-item cat8" style="text-align: center;">
                    <h1>Packaged Drinks</h1>
                </div>
                <div class="col-md-6 filter-item cat8 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Cola</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>O</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Orange</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Grape</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Ginger Ale</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Sprite</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Ting</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Ginger Beer</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat8 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Bottle Water</h5>
                       </div>
                       <div class="menu-price">
                            <span>$1.25</span>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.initialMenuItem7').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="3070px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="8280px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat9">
                    <h1 class="text-center">Quick Bites</h1>
                    <p class="menu-subtitle">Mixed Pot Bigga Quick bites  (make combo for + $3 Add Beef bacon +$3)</p>
                    </div>
                    <div class="col-md-6 mt-3 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>H</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Hamburger</h5>
                           </div>
                           <div class="menu-price">
                            <span>$7.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>L</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Legend's Onion Cheese Burger</h5>
                                <p>Two smashed onion Patties ,lettuce ,tomato ,and Mixed pot Special Burger bop sauce</p>
                           </div>
                           <div class="menu-price">
                            <span>$12.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Cheese Burger</h5>
                           </div>
                           <div class="menu-price">
                            <span>$8.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>W</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Wingz</h5>
                                <p>4 XL whole Wingz $10(Sauced +1.50)</p>
                           </div>
                           <div class="menu-price">
                            <span>$8.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Crispy Chicken Sandwich</h5>
                           </div>
                           <div class="menu-price">
                            <span>$7.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6  mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Crispy Chicken Parm</h5>
                           </div>
                           <div class="menu-price">
                            <span>$8.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Bryson's Catfish Pamigiana</h5>
                           </div>
                           <div class="menu-price">
                            <span>$10.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Chicken Parmigiana</h5>
                           </div>
                           <div class="menu-price">
                            <span>$9.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Fish Sandwhich</h5>
                           </div>
                           <div class="menu-price">
                            <span>$8.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Jerk Chicken W Mango Lime Sauce</h5>
                                <p>Mango Lime Sauce</p>
                           </div>
                           <div class="menu-price">
                            <span>$9.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Jerk Salmon W Mango lime Sauce</h5>
                           </div>
                           <div class="menu-price">
                            <span>$14.00</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Southern Catfish Strips</h5>
                           </div>
                           <div class="menu-price">
                            <span>3pcs $7 or 5pcs $9</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>A</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Ahmed's Sauced Chikcen Strips</h5>
                                <p>(Hot Honey, Jersey Mombo, Buffalo, Smokey Sweet BBQ, Garlic Parm, Cajun Rub)</p>
                           </div>
                           <div class="menu-price">
                            <span>3pcs $8 or 5pcs $10</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Jumbo Crispy Shrimp</h5>
                           </div>
                           <div class="menu-price">
                            <span>10pcs $14</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">French Fries</h5>
                           </div>
                           <div class="menu-price">
                            <span>$4</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Cheese Fries</h5>
                           </div>
                           <div class="menu-price">
                            <span>$6</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>L</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Loaded Cheese Steak Fries</h5>
                           </div>
                           <div class="menu-price">
                            <span>$15</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-1 filter-item cat9">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Loaded Jerk Chicken Fries</h5>
                           </div>
                           <div class="menu-price">
                            <span>$13</span>
                           </div>
                        </div>
                    </div>
                
                    <div class="col-md-12 filter-item cat9 text-center">
                        <h1>Mixed Pot Stuffed Beef <p>Or</p> Chicken Patties</h1>
                    </div>
                
                    <div class="col-md-6 filter-item cat9 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Solo Pattie</h5>
                           </div>
                           <div class="menu-price">
                            <span>$4</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat9 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">2 Pattie Deal</h5>
                           </div>
                           <div class="menu-price">
                            <span>$6</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat9 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pattie With Cheese</h5>
                           </div>
                           <div class="menu-price">
                            <span>$5</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat9 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pattie With Cheese And Turkey Pepperoni</h5>
                           </div>
                           <div class="menu-price">
                            <span>$8</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat9 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pattie With French Fries</h5>
                           </div>
                           <div class="menu-price">
                            <span>$5</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat9 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pattie With Cheese And Chop Jerk Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$7</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat9 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pattie With Fries And Cheese</h5>
                           </div>
                           <div class="menu-price">
                            <span>$5.50</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat9 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pattie With Egg, Cheese And Beef Bacon</h5>
                           </div>
                           <div class="menu-price">
                            <span>$9</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat9 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pattie With Chicken Tender, Cheese And Beef Bacon</h5>
                           </div>
                           <div class="menu-price">
                            <span>$9.50</span>
                           </div>
                        </div>
                    </div>    
            </div>`);
            });

            $('.initialMenuItem8').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1100px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="2670px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="text-center filter-item cat10">
                    <h1>Desserts</h1>
                    <p>Miss P's Luciously Famous Desserts</p>
                </div>
                <div class="col-md-6 filter-item cat10 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Chocolate Fudge Cake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Single Serve</p>
                                    <p>$5</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>Whole</p>
                                    <p>$65 (Serves 6-8)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat10 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>L</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Linda's Banana Crunch Pudding</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Single Serve</p>
                                    <p>$8</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>Whole</p>
                                    <p>$65 (Serves 6-8)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat10 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Cheryl's Sweet Potato Pie</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Single Serve</p>
                                    <p>$8</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>Whole</p>
                                    <p>$65 (Serves 6-8)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat10 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Musa's Peach Cobbler</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Single Serve</p>
                                    <p>$8</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>Whole</p>
                                    <p>$65 (Serves 6-8)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat10 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Strawberry Lemonade Cake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Single Serve</p>
                                    <p>$8</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>Whole</p>
                                    <p>$65 (Serves 6-8)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat10 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Strawberry Crunch Cheesecake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Single Serve</p>
                                    <p>$8</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>Whole</p>
                                    <p>$65 (Serves 6-8)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat10 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Pineapple Coconut Cake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Single Serve</p>
                                    <p>$8</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>Whole</p>
                                    <p>$65 (Serves 6-8)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.initialMenuItem9').on('click', function(){
                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="3600px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="9200px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat11" style="text-align: center;">
                    <h1>Family Meals</h1>
                    <p>I Am Blessed Family Table Deals</p>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Curry Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$50</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Taylor's Oxtail</h5>
                       </div>
                       <div class="menu-price">
                        <span>$76</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Brown Stew Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$53</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Jocelyn's Curry Goat</h5>
                       </div>
                       <div class="menu-price">
                        <span>$69</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Juicy Jerk Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$65</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>K</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                       </div>
                       <div class="menu-price">
                        <span>$73</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat11 mt-1">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Jerk Or Mango Lime Salmon</h5>
                       </div>
                       <div class="menu-price">
                        <span>$69</span>
                       </div>
                    </div>
                </div>
                <div class="filter-item cat11" style="text-align: center;">
                    <h3>Honorable Southern Plates Served With 2 Sides</h3>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Melinda's Fried Chicken Meal</h5>
                       </div>
                       <div class="menu-price">
                        <span>$18</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Turkey Wings Roasted Or BBQ</h5>
                       </div>
                       <div class="menu-price">
                        <span>$18</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Fried Catfish Fillet</h5>
                       </div>
                       <div class="menu-price">
                        <span>$19</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>E</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Errol's Beef Ribs Roasted With Brown Gravy<p class="menu-title text-center">Or</p><p class="menu-title text-center">BBQ Sauce</p></h5>
                       </div>
                       <div class="menu-price">
                        <span>$25</span>
                       </div>
                    </div>
                </div>
                <div class="filter-item cat11 text-center mt-3">
                    <h3>Nigeria Land Na (African Food) Extra Meats + $5</h3>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>O</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Ozaka's Egusi W Fufu</h5>
                       </div>
                        <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$15</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$20</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>L</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Light Soup W Fufu</h5>
                       </div>
                        <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$15</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$20</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>O</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Okra Soup W Fufu</h5>
                       </div>
                        <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$15</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$20</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Peanut Butter Soup</h5>
                       </div>
                        <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$15</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$20</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>K</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Khadijah's JollOf Rice W Choice Of Protein</h5>
                       </div>
                        <div class="text-start">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>Reg</p>
                                    <p>$15</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>LG</p>
                                    <p>$20</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="filter-item cat11 text-center mt-3">
                    <h3>It's A Party! Shareable African Food</h3>
                    <p>Serves 6-8 Extra Meat + $30</p>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>O</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">1/2 Pan Ozaka's Egusi With 4 Fufu</h5>
                       </div>
                       <div class="menu-price">
                        <span>$110</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">1/2 Pan Light Soup With 4 Fufu</h5>
                       </div>
                       <div class="menu-price">
                        <span>$110</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>O</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">1/2 Pan Okra Soup With 4 Fufu</h5>
                       </div>
                       <div class="menu-price">
                        <span>$110</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">1/2 Pan Khadijah's Jollof Rice With Choice Of Meat</h5>
                       </div>
                       <div class="menu-price">
                        <span>$95</span>
                       </div>
                    </div>
                </div>
                <div class="filter-item cat11 text-center mt-3">
                    <h3>Mixed Pot Family Table Meal Deals</h3>
                    <p>Serves 4-6 People Minimum. 1 Family Size 1 LG Pan Protein, Any 2 LG Sides And 4 PCS Complimentary Bonnie's Bussin Honey Cornbread</p>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Curry Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$65</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Taylor's Oxtail</h5>
                       </div>
                       <div class="menu-price">
                        <span>$100</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Brown Stew Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <span>$67</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Curry Goat</h5>
                       </div>
                       <div class="menu-price">
                        <span>$75</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>K</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                       </div>
                       <div class="menu-price">
                        <span>$90</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">20 Whole Fried Wings</h5>
                       </div>
                       <div class="menu-price">
                        <span>$68</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>T</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">4 Whole Turkey Wings</h5>
                       </div>
                       <div class="menu-price">
                        <span>$67</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">6 Fried Or Broiled Catfish Fillet</h5>
                       </div>
                       <div class="menu-price">
                        <span>$72</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat11 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>E</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">4 Of Errol's Roasted Beef Ribs (Brown Gravy Or BBQ Sauce)</h5>
                       </div>
                       <div class="menu-price">
                        <span>$85</span>
                       </div>
                    </div>
                </div>
            </div>`);
            });
            //End Of Initial Menu Items

            //Removes the active class from the ".btn1" and adds it to ".btn2" 
            $('.btn1').on('click',  function() {
                //Removes the .mainMenu class therefore deleteing all the menu items that were created by "initialMenu" or ".btn2"
                $('.mainMenu').remove();
                $('.btn2').removeClass("active");
                $('.btn1').html(`<li class="h3 btn1 active" data-filter=".cat1">Daily</li>`);

                //checks if the div with the .mainMenu class is empty, if so it creates the list elements that will contain the menu
                //Creates the new ul list and the li elements that will be used to hold the new menu
                //Adds the classes and attributes for each individual menu item 
                //Adds these classes and attributes to the list elements that will contain the menu
                if(document.querySelector('.mainMenu') === null){
                    //Re creates the ul element creating an empty ul that will be used to contain all of the dynamic menu items
                    const mMenu = document.createElement('ul');
                    const mItem1 = document.createElement('li');
                    const mItem2 = document.createElement('li');
                    const mItem3 = document.createElement('li');
                    const mItem4 = document.createElement('li');
                    const mItem5 = document.createElement('li');
                    const mItem6 = document.createElement('li');
                    const mItem7 = document.createElement('li');
                    const mItem8 = document.createElement('li');
                    const mItem9 = document.createElement('li');

                    //Adds the .mainMenu class to the ul element that was just created and will contain the menu items that will be created dynamically
                    //Adds the classes and attributes that are required for each li element that will contain a menuItem
                    mMenu.classList.add('filter-btns');
                    mMenu.classList.add('mainMenu');
                    mItem1.classList.add('menu1');
                    mItem1.classList.add('menuItem1');
                    mItem1.setAttribute('data-filter', '.cat1');

                    mItem2.classList.add('menu1');
                    mItem2.classList.add('menuItem2');
                    mItem2.setAttribute('data-filter', '.cat2');

                    mItem3.classList.add('menu1');
                    mItem3.classList.add('menuItem3');
                    mItem3.setAttribute('data-filter', '.cat5');

                    mItem4.classList.add('menu1');
                    mItem4.classList.add('menuItem4');
                    mItem4.setAttribute('data-filter', '.cat6');

                    mItem5.classList.add('menu1');
                    mItem5.classList.add('menuItem5');
                    mItem5.setAttribute('data-filter', '.cat7');

                    mItem6.classList.add('menu1');
                    mItem6.classList.add('menuItem6');
                    mItem6.setAttribute('data-filter', '.cat8');

                    mItem7.classList.add('menu1');
                    mItem7.classList.add('menuItem7');
                    mItem7.setAttribute('data-filter', '.cat9');

                    mItem8.classList.add('menu1');
                    mItem8.classList.add('menuItem8');
                    mItem8.setAttribute('data-filter', '.cat10');

                    mItem9.classList.add('menu1');
                    mItem9.classList.add('menuItem9');
                    mItem9.setAttribute('data-filter', '.cat11');

                    document.querySelector('.menuItemNames').append(mMenu);
                    document.querySelector('.mainMenu').append(mItem1);
                    document.querySelector('.mainMenu').append(mItem2);
                    document.querySelector('.mainMenu').append(mItem3);
                    document.querySelector('.mainMenu').append(mItem4);
                    document.querySelector('.mainMenu').append(mItem5);
                    document.querySelector('.mainMenu').append(mItem6);
                    document.querySelector('.mainMenu').append(mItem7);
                    document.querySelector('.mainMenu').append(mItem8);
                    document.querySelector('.mainMenu').append(mItem9);

                    $('.menuItem1').html(`Platters`);
                    $('.menuItem2').html(`Entrees`);
                    $('.menuItem3').html(`Salads`);
                    $('.menuItem4').html(`Sides`);
                    $('.menuItem5').html(`Sandwiches`);
                    $('.menuItem6').html(`Drinks`);
                    $('.menuItem7').html(`Quick Bites`);
                    $('.menuItem8').html(`Desserts`);
                    $('.menuItem9').html(`Family Meals`);
                }
                //Remove Active Class For ListItems In the Menu 
                const listItemsLength = document.querySelector(".mainMenu").childNodes.length;
                const listItems = document.querySelector(".mainMenu");
                let removeActiveClass = ()=>{
                for (let i = 0; i < listItemsLength; i++){
                    if(listItems.childNodes[i].classList.contains("active")){
                        listItems.childNodes[i].classList.remove("active");
                        };
                    };
                };

                //Adds the menu content to each li element once these elements are clicked individually 
                $('.menuItem1').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");
                    
                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="1300px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="3100px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="filter-item cat1" style="text-align: center;">
                        <h1>Platters</h1>
                        <p class="menu-subtitle">Mixed Pot Platter Specials All Served With Complimentary Honey Butter Cornbread And A Drink</p><p>Any Global Entree With Any 2 Global Sides</p>
                    </div>
                    <div class="col-md-6 filter-item cat1 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Curry Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$23</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat1 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Taylor's Oxytail</h5>
                           </div>
                           <div class="menu-price">
                            <span>$35</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat1 cat1Item">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Brown Stew Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$22</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat1 cat1Item">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Curry Goat</h5>
                           </div>
                           <div class="menu-price">
                            <span>$26</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat1 cat1Item">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>K</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                           </div>
                           <div class="menu-price">
                            <span>$29</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat1 cat1Item">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Fried Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$24</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat1 cat1Item">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Turkey Wings</h5>
                           </div>
                           <div class="menu-price">
                            <span>$22</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat1 cat1Item">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">2 Fried Catfish Fillet</h5>
                           </div>
                           <div class="menu-price">
                            <span>$27</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat1 cat1Item">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>R</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">2 Of Errol's Roasted Beef Ribs (Brown Gravy Or BBQ Sauce)</h5>
                           </div>
                           <div class="menu-price">
                            <span>$34</span>
                           </div>
                        </div>
                    </div>`);
                });

                $('.menuItem2').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");
                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="1000px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="2400px";
                    };
                    
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="filter-item cat2" style="text-align: center;">
                        <h1>Entrees</h1>
                        <p class="menu-subtitle">Jamaica To The World Entrees Served With White Rice Or Rice And Peas & Steamed Veggies</p>
                    </div>
                    <div class="col-md-6 filter-item cat2 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Curry Chicken</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Medium</p>
                                        <p>$10</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$15</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat2 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Taylor's Oxtail</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Medium</p>
                                        <p>$22</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$27</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat2 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Juicy Jerk Chicken</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Medium</p>
                                        <p>$15</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$19</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat2 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Brew Stew Chicken</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Medium</p>
                                        <p>$10</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$15</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat2 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Curry Goat</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Medium</p>
                                        <p>$14</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$20</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat2 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>K</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Medium</p>
                                        <p>$19</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$25</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat2 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Jerk Or Mango Lime Salmon</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Medium</p>
                                        <p>$21</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$26</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>`);
                });

                $('.menuItem3').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="700px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="1500px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="filter-item cat5" style="text-align: center;">
                        <h1>Salads</h1>
                        <p class="menu-subtitle">Mixed Pot Salad Fix Station</p>
                        <p>Add Jerk Or Crispy Chicken + $5, Salmon + $7, Steak + $10</p>
                    </div>
                    <div class="col-md-6 filter-item cat5 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>G</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Garden Explosion</h5>
                                <p>Seasonal Veggies With A Lettuce Medley, Tomato, Cucumber, And Onions</p>
                           </div>
                           <div class="menu-price">
                            <span>$12</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat5 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Mixed Pot Jamaican Slaw</h5>
                                <p>Fresh Made Cabbage Slaw With Bits Of Spices, Sweetness, And Bright Lime</p>
                           </div>
                           <div class="menu-price">
                            <span>$12</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat5 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Fruit Salad</h5>
                                <p>Cold And Crisp Fruit Salad With Plate</p>
                           </div>
                           <div class="menu-price">
                            <span>$10</span>
                           </div>
                        </div>
                    </div>
                </div>`);
                });

                $('.menuItem4').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="1800px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="4870px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="text-center filter-item cat6">
                        <h1>Sides</h1>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Plantain</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">JollOf Rice</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Fufu</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>R</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Rice And Peas</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Steamed Jasmine Rice</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Bonnie's Bussin Honey Butter Cornbread</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Miss P Macaroni And Cheese</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$8</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$12</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Steamed Cabbage</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Mixed Seasonal Sauteed Veggies</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>G</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Geneva's Potato Salad</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Mashed Potatoes</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Maple Yams</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Jamaican Slaw</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Macaroni Salad</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">French Fries</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat6 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>G</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Garlicky Sauteed String Beans</h5>
                           </div>
                           <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$8</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div> 
                </div>`);
                });

                $('.menuItem5').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="1570px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="4270px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="col-md-12 filter-item cat7 text-center">
                        <h1>Sandwiches</h1>
                        <p>Jumbo New Jersey Take, California Or Italian Sandwhiches</p><p>Make It A Combo + $3 (Extra Meat + $3)</p>
                            <p>Classic Fillings On A Loaded Hero "Take Sandwiches" Come With Fillings Sauteed In A Sweet And Savory Jersey Take Sauce With Onions and Peppers. "Italian" Sandwich Fillings Include Fries, Cheese, Mayo, Ketchup. "California Sandwiches" Have Luttuce, Tomato, & Onion</p>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>Z</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Zaynab's Chicken N Take</h5>
                           </div>
                           <div class="menu-price">
                            <span>$8</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Steak N Take</h5>
                           </div>
                           <div class="menu-price">
                            <span>$9</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Fish N Take</h5>
                           </div>
                           <div class="menu-price">
                            <span>$8</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Salmon N Take</h5>
                           </div>
                           <div class="menu-price">
                            <span>$13</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>I</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Italian Hamburger</h5>
                           </div>
                           <div class="menu-price">
                            <span>$10</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>I</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Italian Cheeseburger</h5>
                           </div>
                           <div class="menu-price">
                            <span>$11</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>I</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Italian Fish</h5>
                           </div>
                           <div class="menu-price">
                            <span>$11</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>I</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Italian Crispy Shrimp</h5>
                           </div>
                           <div class="menu-price">
                            <span>$13</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>I</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Italian Cheesesteak</h5>
                           </div>
                           <div class="menu-price">
                            <span>$12</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">California Hamburger</h5>
                           </div>
                           <div class="menu-price">
                            <span>$10</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">California Cheeseburger</h5>
                           </div>
                           <div class="menu-price">
                            <span>$11</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">California Fish</h5>
                           </div>
                           <div class="menu-price">
                            <span>$12</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">California Crispy Shrimp</h5>
                           </div>
                           <div class="menu-price">
                            <span>$14</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat7 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">California Salmon Fillet</h5>
                           </div>
                           <div class="menu-price">
                            <span>$17</span>
                           </div>
                        </div>
                    </div>    
                </div>`);
                });

                $('.menuItem6').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="1500px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="3650px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="filter-item cat8" style="text-align: center;">
                        <h1>Drinks</h1>
                        <p class="menu-subtitle">Mixed Pot Drinks $4</p>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>I</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Iced Fruited Sorrel Tea</h5>
                                <p>Hibiscus With Hints Of Orange Apple And Pear</p>
                           </div>
                           <div class="menu-price">
                            <span>$4</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Peachy Island Punch</h5>
                                <p>Georgia Peach Meet A Cool Island Wave Of Flavor</p>
                           </div>
                           <div class="menu-price">
                            <span>$4</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat8 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Mixed Pot Crosstown</h5>
                                <p>Iced Sorrel & Black Tea</p>
                           </div>
                           <div class="menu-price">
                            <span>$4</span>
                            </div>
                        </div>
                    </div>
                    <div class="filter-item cat8" style="text-align: center;">
                        <h1>Packaged Drinks</h1>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Cola</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>O</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Orange</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>G</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Grape</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>G</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Ginger Ale</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Sprite</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Ting</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>G</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Ginger Beer</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat8 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Bottle Water</h5>
                           </div>
                           <div class="menu-price">
                                <span>$1.25</span>
                           </div>
                        </div>
                    </div>
                </div>`);
                });

                $('.menuItem7').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="3070px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="8300px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="filter-item cat9">
                        <h1 class="text-center">Quick Bites</h1>
                        <p class="menu-subtitle">Mixed Pot Bigga Quick bites  (make combo for + $3 Add Beef bacon +$3)</p>
                        </div>
                        <div class="col-md-6 mt-3 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>H</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Hamburger</h5>
                               </div>
                               <div class="menu-price">
                                <span>$7.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-3 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>L</h1>
                                </div>
                               <div class="menu-content text-center">
                                    <h5 class="menu-title">Legend's Onion Cheese Burger</h5>
                                    <p>Two smashed onion Patties ,lettuce ,tomato ,and Mixed pot Special Burger bop sauce</p>
                               </div>
                               <div class="menu-price">
                                <span>$12.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Cheese Burger</h5>
                               </div>
                               <div class="menu-price">
                                <span>$8.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>W</h1>
                                </div>
                               <div class="menu-content text-center">
                                    <h5 class="menu-title">Wingz</h5>
                                    <p>4 XL whole Wingz $10(Sauced +1.50)</p>
                               </div>
                               <div class="menu-price">
                                <span>$8.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Crispy Chicken Sandwich</h5>
                               </div>
                               <div class="menu-price">
                                <span>$7.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6  mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Crispy Chicken Parm</h5>
                               </div>
                               <div class="menu-price">
                                <span>$8.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>B</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Bryson's Catfish Pamigiana</h5>
                               </div>
                               <div class="menu-price">
                                <span>$10.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Chicken Parmigiana</h5>
                               </div>
                               <div class="menu-price">
                                <span>$9.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>F</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Fish Sandwhich</h5>
                               </div>
                               <div class="menu-price">
                                <span>$8.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>J</h1>
                                </div>
                               <div class="menu-content text-center">
                                    <h5 class="menu-title">Jerk Chicken W Mango Lime Sauce</h5>
                                    <p>Mango Lime Sauce</p>
                               </div>
                               <div class="menu-price">
                                <span>$9.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>J</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Jerk Salmon W Mango lime Sauce</h5>
                               </div>
                               <div class="menu-price">
                                <span>$14.00</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>S</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Southern Catfish Strips</h5>
                               </div>
                               <div class="menu-price">
                                <span>3pcs $7 or 5pcs $9</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>A</h1>
                                </div>
                               <div class="menu-content text-center">
                                    <h5 class="menu-title">Ahmed's Sauced Chikcen Strips</h5>
                                    <p>(Hot Honey, Jersey Mombo, Buffalo, Smokey Sweet BBQ, Garlic Parm, Cajun Rub)</p>
                               </div>
                               <div class="menu-price">
                                <span>3pcs $8 or 5pcs $10</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>J</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Jumbo Crispy Shrimp</h5>
                               </div>
                               <div class="menu-price">
                                <span>10pcs $14</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>F</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">French Fries</h5>
                               </div>
                               <div class="menu-price">
                                <span>$4</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Cheese Fries</h5>
                               </div>
                               <div class="menu-price">
                                <span>$6</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>L</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Loaded Cheese Steak Fries</h5>
                               </div>
                               <div class="menu-price">
                                <span>$15</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1 filter-item cat9">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Loaded Jerk Chicken Fries</h5>
                               </div>
                               <div class="menu-price">
                                <span>$13</span>
                               </div>
                            </div>
                        </div>
                    
                        <div class="col-md-12 filter-item cat9 text-center">
                            <h1>Mixed Pot Stuffed Beef <p>Or</p> Chicken Patties</h1>
                        </div>
                    
                        <div class="col-md-6 filter-item cat9 mt-3">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>S</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Solo Pattie</h5>
                               </div>
                               <div class="menu-price">
                                <span>$4</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 filter-item cat9 mt-3">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>P</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">2 Pattie Deal</h5>
                               </div>
                               <div class="menu-price">
                                <span>$6</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 filter-item cat9 mt-1">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>P</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Pattie With Cheese</h5>
                               </div>
                               <div class="menu-price">
                                <span>$5</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 filter-item cat9 mt-1">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Pattie With Cheese And Turkey Pepperoni</h5>
                               </div>
                               <div class="menu-price">
                                <span>$8</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 filter-item cat9 mt-1">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>P</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Pattie With French Fries</h5>
                               </div>
                               <div class="menu-price">
                                <span>$5</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 filter-item cat9 mt-1">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>P</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Pattie With Cheese And Chop Jerk Chicken</h5>
                               </div>
                               <div class="menu-price">
                                <span>$7</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 filter-item cat9 mt-1">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>P</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Pattie With Fries And Cheese</h5>
                               </div>
                               <div class="menu-price">
                                <span>$5.50</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-6 filter-item cat9 mt-1">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>C</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Pattie With Egg, Cheese And Beef Bacon</h5>
                               </div>
                               <div class="menu-price">
                                <span>$9</span>
                               </div>
                            </div>
                        </div>
                        <div class="col-md-12 filter-item cat9 mt-1">
                            <div class="menu-item d-flex flex-column">
                                <div class="menu-item-img">
                                    <h1>P</h1>
                                </div>
                               <div class="menu-content">
                                    <h5 class="menu-title">Pattie With Chicken Tender, Cheese And Beef Bacon</h5>
                               </div>
                               <div class="menu-price">
                                <span>$9.50</span>
                               </div>
                            </div>
                        </div>    
                </div>`)});

                $('.menuItem8').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="1100px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="2670px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="text-center filter-item cat10">
                        <h1>Desserts</h1>
                        <p>Miss P's Luciously Famous Desserts</p>
                    </div>
                    <div class="col-md-6 filter-item cat10 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Chocolate Fudge Cake</h5>
                           </div>
                           <div class="text-center">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Single Serve</p>
                                        <p>$5</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>Whole</p>
                                        <p>$65 (Serves 6-8)</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat10 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>L</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Linda's Banana Crunch Pudding</h5>
                           </div>
                           <div class="text-center">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Single Serve</p>
                                        <p>$8</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>Whole</p>
                                        <p>$65 (Serves 6-8)</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat10 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Cheryl's Sweet Potato Pie</h5>
                           </div>
                           <div class="text-center">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Single Serve</p>
                                        <p>$8</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>Whole</p>
                                        <p>$65 (Serves 6-8)</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat10 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Musa's Peach Cobbler</h5>
                           </div>
                           <div class="text-center">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Single Serve</p>
                                        <p>$8</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>Whole</p>
                                        <p>$65 (Serves 6-8)</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat10 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Strawberry Lemonade Cake</h5>
                           </div>
                           <div class="text-center">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Single Serve</p>
                                        <p>$8</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>Whole</p>
                                        <p>$65 (Serves 6-8)</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat10 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Strawberry Crunch Cheesecake</h5>
                           </div>
                           <div class="text-center">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Single Serve</p>
                                        <p>$8</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>Whole</p>
                                        <p>$65 (Serves 6-8)</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat10 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Pineapple Coconut Cake</h5>
                           </div>
                           <div class="text-center">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Single Serve</p>
                                        <p>$8</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>Whole</p>
                                        <p>$65 (Serves 6-8)</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>`);
                });

                $('.menuItem9').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="3600px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="9200px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="filter-item cat11" style="text-align: center;">
                        <h1>Family Meals</h1>
                        <p>I Am Blessed Family Table Deals</p>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Curry Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$50</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Taylor's Oxtail</h5>
                           </div>
                           <div class="menu-price">
                            <span>$76</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Brown Stew Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$53</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Jocelyn's Curry Goat</h5>
                           </div>
                           <div class="menu-price">
                            <span>$69</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Juicy Jerk Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$65</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>K</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                           </div>
                           <div class="menu-price">
                            <span>$73</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat11 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Jerk Or Mango Lime Salmon</h5>
                           </div>
                           <div class="menu-price">
                            <span>$69</span>
                           </div>
                        </div>
                    </div>
                    <div class="filter-item cat11" style="text-align: center;">
                        <h3>Honorable Southern Plates Served With 2 Sides</h3>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Melinda's Fried Chicken Meal</h5>
                           </div>
                           <div class="menu-price">
                            <span>$18</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Turkey Wings Roasted Or BBQ</h5>
                           </div>
                           <div class="menu-price">
                            <span>$18</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Fried Catfish Fillet</h5>
                           </div>
                           <div class="menu-price">
                            <span>$19</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>E</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Errol's Beef Ribs Roasted With Brown Gravy<p class="menu-title text-center">Or</p><p class="menu-title text-center">BBQ Sauce</p></h5>
                           </div>
                           <div class="menu-price">
                            <span>$25</span>
                           </div>
                        </div>
                    </div>
                    <div class="filter-item cat11 text-center mt-3">
                        <h3>Nigeria Land Na (African Food) Extra Meats + $5</h3>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>O</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Ozaka's Egusi W Fufu</h5>
                           </div>
                            <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$15</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$20</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>L</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Light Soup W Fufu</h5>
                           </div>
                            <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$15</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$20</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>O</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Okra Soup W Fufu</h5>
                           </div>
                            <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$15</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$20</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>P</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Peanut Butter Soup</h5>
                           </div>
                            <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$15</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$20</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>K</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Khadijah's JollOf Rice W Choice Of Protein</h5>
                           </div>
                            <div class="text-start">
                                <div class="d-flex">
                                    <div class="menu-price-list-style me-3">
                                        <p>Reg</p>
                                        <p>$15</p>
                                    </div>
                                    <div class="menu-price-list-style me-3">
                                        <p>LG</p>
                                        <p>$20</p>    
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="filter-item cat11 text-center mt-3">
                        <h3>It's A Party! Shareable African Food</h3>
                        <p>Serves 6-8 Extra Meat + $30</p>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>O</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">1/2 Pan Ozaka's Egusi With 4 Fufu</h5>
                           </div>
                           <div class="menu-price">
                            <span>$110</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">1/2 Pan Light Soup With 4 Fufu</h5>
                           </div>
                           <div class="menu-price">
                            <span>$110</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>O</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">1/2 Pan Okra Soup With 4 Fufu</h5>
                           </div>
                           <div class="menu-price">
                            <span>$110</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">1/2 Pan Khadijah's Jollof Rice With Choice Of Meat</h5>
                           </div>
                           <div class="menu-price">
                            <span>$95</span>
                           </div>
                        </div>
                    </div>
                    <div class="filter-item cat11 text-center mt-3">
                        <h3>Mixed Pot Family Table Meal Deals</h3>
                        <p>Serves 4-6 People Minimum. 1 Family Size 1 LG Pan Protein, Any 2 LG Sides And 4 PCS Complimentary Bonnie's Bussin Honey Cornbread</p>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Curry Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$65</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Taylor's Oxtail</h5>
                           </div>
                           <div class="menu-price">
                            <span>$100</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Brown Stew Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <span>$67</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Curry Goat</h5>
                           </div>
                           <div class="menu-price">
                            <span>$75</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>K</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">Kathleen's Curry Shrimp</h5>
                           </div>
                           <div class="menu-price">
                            <span>$90</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">20 Whole Fried Wings</h5>
                           </div>
                           <div class="menu-price">
                            <span>$68</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">4 Whole Turkey Wings</h5>
                           </div>
                           <div class="menu-price">
                            <span>$67</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">6 Fried Or Broiled Catfish Fillet</h5>
                           </div>
                           <div class="menu-price">
                            <span>$72</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat11 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>E</h1>
                            </div>
                           <div class="menu-content">
                                <h5 class="menu-title">4 Of Errol's Roasted Beef Ribs (Brown Gravy Or BBQ Sauce)</h5>
                           </div>
                           <div class="menu-price">
                            <span>$85</span>
                           </div>
                        </div>
                    </div>
                </div>`);
                });

                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });
            //Removes the active class from ".btn1" and adds it to ".btn2" the active class highlights the current btn that is being used
            $('.btn2').on( 'click',  function() {
                //Removes the .mainMenu class therefore deleteing all the menu items that were created by "initialMenu" or ".btn1"
                $('.mainMenu').remove();
                $('.btn1').removeClass("active");
                $('.btn2').html(`<li class="h3 btn2 active">Catering</li>`);

                //checks if the div with the .mainMenu class is empty, if so it creates the list elements that will contain the menu
                //Creates the new ul list and the li elements that will be used to hold the new menu
                //Adds the classes and attributes for each individual menu item 
                //Adds these classes and attributes to the list elements that will contain the menu
                if(document.querySelector('.mainMenu') === null){
                    //Re creates the ul element creating an empty ul that will be used to contain all of the dynamic menu items
                    const mMenu = document.createElement('ul');
                    const mItem10 = document.createElement('li');
                    const mItem11 = document.createElement('li');
                    const mItem12 = document.createElement('li');
                    const mItem13 = document.createElement('li');
                    const mItem14 = document.createElement('li');
                    const mItem15 = document.createElement('li');
                    const mItem16 = document.createElement('li');
                    const mItem17 = document.createElement('li');
                    const mItem18 = document.createElement('li');
                    const mItem19 = document.createElement('li');
                    const mItem20 = document.createElement('li');
                    
                    //Adds the .mainMenu class to the ul element that was just created and will contain the menu items that will be created dynamically
                    //Adds the classes and attributes that are required for each li element that will contain a menuItem
                    mMenu.classList.add('mainMenu');
                    mMenu.classList.add('filter-btns');
                    mItem10.classList.add('menu2');
                    mItem10.classList.add('menuItem10');
                    mItem10.setAttribute('data-filter', '.cat12');

                    mItem11.classList.add('menu2');
                    mItem11.classList.add('menuItem11');
                    mItem11.setAttribute('data-filter', '.cat13');

                    mItem12.classList.add('menu2');
                    mItem12.classList.add('menuItem12');
                    mItem12.setAttribute('data-filter', '.cat14');

                    mItem13.classList.add('menu2');
                    mItem13.classList.add('menuItem13');
                    mItem13.setAttribute('data-filter', '.cat15');

                    mItem14.classList.add('menu2');
                    mItem14.classList.add('menuItem14');
                    mItem14.setAttribute('data-filter', '.cat16');

                    mItem15.classList.add('menu2');
                    mItem15.classList.add('menuItem15');
                    mItem15.setAttribute('data-filter', '.cat17');

                    mItem16.classList.add('menu2');
                    mItem16.classList.add('menuItem16');
                    mItem16.setAttribute('data-filter', '.cat18');

                    mItem17.classList.add('menu2');
                    mItem17.classList.add('menuItem17');
                    mItem17.setAttribute('data-filter', '.cat19');

                    mItem18.classList.add('menu2');
                    mItem18.classList.add('menuItem18');
                    mItem18.setAttribute('data-filter', '.cat20');

                    mItem19.classList.add('menu2');
                    mItem19.classList.add('menuItem19');
                    mItem19.setAttribute('data-filter', '.cat21');

                    mItem20.classList.add('menu2');
                    mItem20.classList.add('menuItem20');
                    mItem20.setAttribute('data-filter', '.cat22');

                    document.querySelector('.menuItemNames').append(mMenu);
                    document.querySelector('.mainMenu').append(mItem10);
                    document.querySelector('.mainMenu').append(mItem11);
                    document.querySelector('.mainMenu').append(mItem12);
                    document.querySelector('.mainMenu').append(mItem13);
                    document.querySelector('.mainMenu').append(mItem14);
                    document.querySelector('.mainMenu').append(mItem15);
                    document.querySelector('.mainMenu').append(mItem16);
                    document.querySelector('.mainMenu').append(mItem17);
                    document.querySelector('.mainMenu').append(mItem18);
                    document.querySelector('.mainMenu').append(mItem19);
                    document.querySelector('.mainMenu').append(mItem20);

                    $('.menuItem10').html(`Mixed Pot International Entrees`);
                    $('.menuItem11').html(`African Food`);
                    $('.menuItem12').html(`Salads`);
                    $('.menuItem13').html(`Side Dishes`);
                    $('.menuItem14').html(`Charcuterie Boards`);
                    $('.menuItem15').html(`Sandwiches`);
                    $('.menuItem16').html(`Patties`);
                    $('.menuItem17').html(`Skewers`);
                    $('.menuItem18').html(`Quick Bites`);
                    $('.menuItem19').html(`Desserts`);
                    $('.menuItem20').html(`Drinks`);
                }

                //Remove Active Class For ListItems In the Menu 
                const listItemsLength = document.querySelector(".mainMenu").childNodes.length;
                const listItems = document.querySelector(".mainMenu");
                let removeActiveClass = ()=>{
                for (let i = 0; i < listItemsLength; i++){
                    if(listItems.childNodes[i].classList.contains("active")){
                        listItems.childNodes[i].classList.remove("active");
                        };
                    };
                };
                
                //Adds the menu content to each li element once these elements are clicked individually 
                $('.menuItem10').on('click', function(){
                    removeActiveClass();
                    this.classList.add("active");

                    if(window.innerWidth > 945){
                        document.querySelector(".menu-wrapper").style.height="4000px";
                    }else{
                        document.querySelector(".menu-wrapper").style.height="10700px";
                    };
                    $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                    <div class="filter-item cat12" style="text-align: center;">
                        <h1>Mixed Pot International Entrees</h1>
                        <p class="menu-subtitle">1/2 Pans Serves 6-10 Full Serves 16-24</p>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>M</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Mom's Spaghetti</h5>
                                <p>(Baked With Turkey Sausage ) Beef Or Turkey Meat</p>
                           </div>
                           <div class="menu-price">
                            <span>$95</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-3">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Baked Ziti</h5>
                                <p>(Baked With Turkey Sausage ) Beef Or Turkey Meat</p>
                                <p>(With Ground Beef Or Turkey + $30)</p>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$45</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$90</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Chicken Parmigiana</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$86</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$170</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Bryson’s Fish parmigiana</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$100</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$190</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Jumbo shrimp Parmigiana</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$125</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$235</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Turkey Italian sausage with peppers</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$65</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$130</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Southern Fried Catfish</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$67</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$142</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>C</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Cajun Fried Catfish</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$73</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$139</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Spicy Buttermilk Fried Chicken Wings (Honey Optional)</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$90</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$180</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Blackened Catfish</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$70</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$140</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Blackened Salmon</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$110</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$220</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Blackened Chicken Breast</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$67</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$130</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Butter Lemon Herb Chicken Breast</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$95</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$180</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>R</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Roasted Butter Lemon Herb Chicken (Bone In)</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$70</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$140</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Butter Lemon herb Salmon</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$95</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$180</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Butter Lemon herb Catfish</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$75</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$150</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Seasonal Veggie Chicken Breast</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$86</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$172</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Seasonal Veggie Catfish</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$80</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$160</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Seasonal Veggie Salmon</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$97</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$190</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Smokey Honey Chicken Breast</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$68</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$139</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Smokey Honey Salmon</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$110</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$210</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Broiled Smokey Honey Catfish</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$76</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$145</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Jerk Chicken W Mango Lime Sauce</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$75</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$150</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Jerk Salmon W Mango Lime Sauce</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$100</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$200</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Jamaican Curry Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$75</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$150</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>S</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Stew Beef (Jamaican)</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$90</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$180</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Taylor’s Oxtail</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$180</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$360</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>B</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Brown Stew Chicken</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$75</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$150</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>J</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Joscelyn’s Curry Goat</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$90</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$180</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>K</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Kathleen’s Curry Shrimp</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$150</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$300</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>F</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Fried Chicken (Bone In)</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$65</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$130</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-6 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>T</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Turkey Wings Roasted or BBQ</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$75</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$150</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-12 filter-item cat12 mt-1">
                        <div class="menu-item d-flex flex-column">
                            <div class="menu-item-img">
                                <h1>E</h1>
                            </div>
                           <div class="menu-content text-center">
                                <h5 class="menu-title">Errol’s  Roasted Beef Ribs (Brown Gravy Or BBQ Sauce)</h5>
                           </div>
                           <div class="menu-price">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <p><span>1/2 Pan</span></p>
                                    <p class="ms-3"><span>$125</span></p>
                                </div>
                                <div class="ms-3">
                                    <p><span>FULL</span></p>
                                    <p><span>$250</span></p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                `);

            });

            $('.menuItem11').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="700px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="1550px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat13" style="text-align: center;">
                    <h1>African Food</h1>
                    <p class="menu-subtitle">It’s a Party! Shareable African Food (Serves 4-6 ) Extra Meat + $30</p>
                </div>
                <div class="col-md-6 filter-item cat13 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>O</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">1/2 Pan Ozaka’s Egusi With 4 FuFu</h5>
                       </div>
                       <div class="menu-price">
                        <span>$110</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat13 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">1/2 Pan Light Soup With 4 Fufu</h5>
                       </div>
                       <div class="menu-price">
                        <span>$110</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat13 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>O</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">1/2 Pan Okra Soup With 4 Fufu</h5>
                       </div>
                       <div class="menu-price">
                        <span>$110</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat13 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>K</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">1/2 Pan Khadijah’s Jollof Rice With Choice Of Meat</h5>
                       </div>
                       <div class="menu-price">
                        <span>$95</span>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem12').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1450px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="3700px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat14" style="text-align: center;">
                    <h1>Salads</h1>
                    <p class="menu-subtitle">Salads Pay By The Pan</p>
                        <p>1/2 Pan Serves 12-18 - FULL Pan Serves 35-50 Add Chicken + $30 Salmon + $50 Steak + $70</p>
                </div>
                <div class="col-md-6 filter-item cat14 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">The Mixed Pot Garden Explosion</h5>
                            <p>(A Mixed Green, With Seasonal Vegetables, Tomato, Red Onion, And Shaved Cheese Salad)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$35</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$70</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat14 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Miss P’s Caesar avocado salad</h5>
                            <p>(Spaghetti, Pasta, Onion, Heirloom Cherry Tomato, Fresh Herbs, Avocado, Parmesan Cheese, And A Creamy Avocado Caesar Dressing)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$55</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$110</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat14 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jamaican Slaw</h5>
                            <p>(Red & Green Cabbage, Carrot, Fresh Herbs Mixed With A Creamy, Sweet, Savory, And Citrus Dressing. Perfect Cool Bite To Have Or Brighten Up The Plate.)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$35</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$70</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat14 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Miss P’s PARTY FRUIT Salad </h5>
                            <p>A Mix Of Seasonal Fruit With A Splash Of Simple Syrup Flavored With Lime And Mint.</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$50</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$100</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat14 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jamaican Macaroni Salad </h5>
                            <p>(Elbow Pasta, Carrot, Peas, Spices, And Fresh Herbs) (Creamy, Carby, Yet Light And Fresh)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$33</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$66</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat14 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Southern Pasta And Tuna Salad</h5>
                            <p>(Creamy And Tangy Southern Dish That Keeps You Biting Including Tuna, Celery, Fresh Herbs, Sweet Relish And More)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$55</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$110</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat14 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Party Pasta Salad</h5>
                            <p>(Tri Color Pasta Mixed With Fresh Veggies, Fresh Herbs, Sun Dried Tomato, Olives, Cheeses, And More Tossed In A Zesty Oil And Vinegar Based Dressing.)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$55</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$110</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem13').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="2570px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="6070px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat15" style="text-align: center;">
                    <h1>Side Dishes</h1>
                    <p class="menu-subtitle">Full Of Flavor Side Dishes And Add On's</p>
                        <p>1/2 Pan Serves 12-16 FULL Serves 24-38</p>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Miss P Macaroni And Cheese</h5>
                            <p>Different Price Due To Decadent Recipe</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$95</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$180</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Plantain</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Fufu</h5>
                       </div>
                       <div class="menu-price">
                        <span>$5 Per Ball</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Potato Wedges</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$50</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$95</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jollof Rice</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>R</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Rice And Peas </h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Steamed Jasmine Rice</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content text-center">
                           <h5 class="menu-title">Bonnie’s Bussin Honey Butter-Cornbread </h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Steam Cabbage</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Mixed Seasonal Sautéed Veggies</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Geneva's Potato Salad</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jamaican Potato Salad <p>(Carrot, Peas, Creamy, And Flavorful)</p></h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Mashed Potatoes</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Maple Yams</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jamaican Macaroni Salad</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jamaican Slaw</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Garlicky Sautéed String Beans </h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat15 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>W</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">West Virginian Skillet Potato n Onions</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem14').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1300px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="3050px"; 
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat16" style="text-align: center;">
                    <h1>Charcuterie Boards</h1>
                    <p class="menu-subtitle">Patisha’s Charcuterie Place Platters</p>
                    <p>Medium Platter Serves 10-16 LG Platter Serves 20-28</p>
                </div>
                <div class="col-md-6 filter-item cat16 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>F</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Fresh Assorted Fruit Tray</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>MD</span></p>
                                <p><span>$45</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$90</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat16 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Ismael’s Bounty Bread Tray </h5>
                            <p>(Assortment of breads jams, compound butters)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>MD</span></p>
                                <p><span>$35</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$70</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat16 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>Z</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Zaynab’s Sweet And Salty Platter</h5>
                            <p>(Dried & Fresh Fruits, Assorted Nuts, Biscuits, Beef Summer Sausage, Turkey Pepperoni, Jams, And Cheeses)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>MD</span></p>
                                <p><span>$70</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$140</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat16 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>G</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Geneva’s Back To The Basics</h5>
                            <p>(Assorted Cheese, Assorted Grapes, Assorted Crackers)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>MD</span></p>
                                <p><span>$36</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$72</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat16 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Miss P’s PARTY TRAY SUPREME</h5>
                            <p>(Assorted Chocolates, Pretzels, Beef Summer Sausages, Turkey Pepperoni Dips, Jams, Spreads, Biscuits, Olives, Cookies, Dried Fruit, Cheese, Nuts, Fresh Fruit,Breads, And compound Butters)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>MD</span></p>
                                <p><span>$120</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$240</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat16 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Crisp, Cookie And Biscuit Tray</h5>
                            <p>(Assortment Of Crackers, Cookies, Jams, Spreads)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>MD</span></p>
                                <p><span>$35</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$70</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem15').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1450px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="3650px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat17" style="text-align: center;">
                    <h1>Sandwiches</h1>
                    <p class="menu-subtitle">Sandwiches By The Pack</p>
                        <p>( With Trimmings On The Side )</p>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>L</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Legend’s Onion Cheeseburgers</h5>
                       </div>
                       <div class="menu-price">
                        <span>$120</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Cheeseburgers</h5>
                       </div>
                       <div class="menu-price">
                        <span>$95</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>H</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Hamburgers</h5>
                       </div>
                       <div class="menu-price">
                        <span>$83</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>H</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 1-LB All Beef Hotdogs With Trimmings On The Side</h5>
                       </div>
                       <div class="menu-price">
                            <div>
                                <p class="ms-4"><span>$45</span></p>
                                <p><span>$67 W Chili</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Crispy Chicken Sandwiches</h5>
                       </div>
                       <div class="menu-price">
                        <span>$65</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Crispy Chicken Sandwiches</h5>
                       </div>
                       <div class="menu-price">
                        <span>$85</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>B</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Bryson’s Fish Parm Sandwich</h5>
                       </div>
                       <div class="menu-price">
                        <span>$110</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Jerk Chicken Mango Lime Sauce Sandwiches</h5>
                       </div>
                       <div class="menu-price">
                        <span>$100</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Jerk Salmon Mango Lime Sauce Sandwich</h5>
                       </div>
                       <div class="menu-price">
                        <span>$115</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Southern Catfish Sandwich</h5>
                       </div>
                       <div class="menu-price">
                        <span>$70</span>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat17 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">12 Cajun Catfish Sandwich</h5>
                       </div>
                       <div class="menu-price">
                        <span>$73</span>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem16').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1200px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="3125px"; 
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat18" style="text-align: center;">
                    <h1>Patties</h1>
                    <p class="menu-subtitle">Ethan's Patties By Pans</p>
                    <p>(Chicken Or Beef)</p>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex flex-column">
                            <div class="ms-4"><span>$40</span></div>
                            <div><span>20pcs $67</span></div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties With Lettuce, Tomato, Onion</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex flex-column">
                            <div class="ms-4"><span>$60</span></div>
                            <p><span>20pcs $120</span></p>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties With Cheese</h5>
                       </div>
                       <div class="menu-price">
                        <div>
                            <p class="ms-4"><span>$50</span></p>
                            <p><span>20pcs $100</span></p>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties With Cheese And Turkey Pepperoni</h5>
                       </div>
                       <div class="menu-price">
                        <div>
                            <p class="ms-4"><span>$80</span></p>
                            <p><span>20pcs $160</span></p>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties With Skillet Potato And Onion</h5>
                       </div>
                       <div class="menu-price">
                        <div>
                            <p class="ms-4"><span>$55</span></p>
                            <p><span>20pcs $110</span></p>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties With Cheese And Chop Jerk Chicken</h5>
                       </div>
                       <div class="menu-price">
                        <div>
                            <p class="ms-4"><span>$79</span></p>
                            <p><span>10pcs $158</span></p>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties With Egg, Cheese And Beef Bacon</h5>
                       </div>
                       <div class="menu-price">
                        <div>
                            <p class="ms-4"><span>$90</span></p>
                            <p><span>20pcs $180</span></p>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat18 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">10 Patties With Chicken Tender, Cheese, And Beef Bacon</h5>
                       </div>
                       <div class="menu-price">
                        <div>
                            <p class="ms-4"><span>$95</span></p>
                            <p><span>20pcs $190</span></p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem17').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="770px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="2000px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat19" style="text-align: center;">
                    <h1>Skewers</h1>
                    <p class="menu-subtitle">Mixed Pot Skewers 1/2 Pan Serves 12-18 - FULL Pan Serves 35-50</p>
                    <p>Served On Small Stix (Can Request Without Stix For Service Options) For Portability, Less Mess, And Time Efficient Service Of Your Event.</p>
                </div>
                <div class="col-md-6 filter-item cat19 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Cajun Fried Catfish Strips On Stix With Mixed Pot Tartar Sauce</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$70</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$140</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat19 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>A</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Ahmed’s Sauced Chicken Strips On Stix</h5>
                                <p>( Hot Honey, Jersey Mombo, Buffalo, Smokey Sweet BBQ, Garlic Parm, Cajun Rub)</p>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$65</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$130</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat19 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jumbo Sweet & Sour Shrimp On Stix</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$95</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$190</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat19 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jumbo Garlic Parm Shrimp On Stix</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$95</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$190</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem18').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1050px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="2550px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat20" style="text-align: center;">
                    <h1>Quick Bites</h1>
                </div>
                <div class="col-md-6 filter-item cat20 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jerk Chicken W Pineapple Lime Sauce Bites</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$62</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$120</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat20 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>J</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Jerk Salmon W Pineapple Lime Sauce Bites</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$83</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$160</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat20 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Cheesy French Garlic Bread</h5>
                       </div>
                       <div class="menu-price">
                        <div class="d-flex justify-content-center">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$32</span></p>
                            </div>
                            <div class="ms-3">
                                <p><span>FULL</span></p>
                                <p><span>$60</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="filter-item cat20 mt-4" style="text-align: center;">
                    <h1>LOADED West Virginian Skillet Potato And Onion</h1>
                    <p>1/2 Pans Serves 8-12</p>
                </div>
                <div class="col-md-6 filter-item cat20 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>L</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Loaded Cheese Steak Potatoes</h5>
                            <p>(Potatoes, Onion, Peppers, 3 Cheese Blend, Spring Onion, Sour Cream, Steak, Beef Bacon Bits Sauces)</p>
                       </div>
                       <div class="menu-price">
                            <div>
                                <p><span>1/2 Pan</span></p>
                                <p class="ms-3"><span>$95</span></p>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat20 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>L</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Loaded Jerk Chicken Potatoes</h5>
                            <p>(Potatoes, Jerk Chicken, Pepper Jack Cheese BBQ Sauce, Creamy Citrus Sauce, Spring Onion, And Beef Bacon Bits)</p>
                       </div>
                       <div class="menu-price">
                        <div>
                            <p><span>1/2 Pan</span></p>
                            <p class="ms-3"><span>$32</span></p>
                        </div>
                       </div>
                    </div>
                </div>    
            </div>`);
            });

            $('.menuItem19').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="1150px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="2600px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="text-center filter-item cat21">
                    <h1>Desserts</h1>
                    <p>Miss P's Luciously Famous Desserts</p>
                    <p>To Go Option (Has A Minimum Of 10pcs) Or  1/2 Pan Serves 12-16 $75</p>
                </div>
                <div class="col-md-6 filter-item cat21 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Chocolate Fudge Cake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>10pcs</p>
                                    <p>$6</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>1/2 Pan</p>
                                    <p>$75 (Serves 12-16)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat21 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>L</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Linda’s Banana Crunch Pudding</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>10pcs</p>
                                    <p>$6</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>1/2 Pan</p>
                                    <p>$75 (Serves 12-16)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat21 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>C</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">2 Of Cheryl’s Sweet Potato Pie Shortbread Crust</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>10pcs</p>
                                    <p>$6</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>1/2 Pan</p>
                                    <p>$75 (Serves 12-16)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat21 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Musa’s Peach Cobbler</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>10pcs</p>
                                    <p>$6</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>1/2 Pan</p>
                                    <p>$75 (Serves 12-16)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat21 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Strawberry Lemonade Cake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>10pcs</p>
                                    <p>$6</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>1/2 Pan</p>
                                    <p>$75 (Serves 12-16)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat21 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>S</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Strawberry Crunch Cheesecake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p>10pcs</p>
                                    <p>$6</p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p>1/2 Pan</p>
                                    <p>$75 (Serves 12-16)</p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat21 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content">
                            <h5 class="menu-title">Pineapple Coconut Cake</h5>
                       </div>
                       <div class="text-center">
                            <div class="d-flex">
                                <div class="menu-price-list-style me-3">
                                    <p><span>10pcs</span></p>
                                    <p><span>$6</span></p>
                                </div>
                                <div class="menu-price-list-style me-3">
                                    <p><span>1/2 Pan</span></p>
                                    <p><span>$75 (Serves 12-16)</span></p>    
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>`);
            });

            $('.menuItem20').on('click', function(){
                removeActiveClass();
                this.classList.add("active");

                if(window.innerWidth > 945){
                    document.querySelector(".menu-wrapper").style.height="800px";
                }else{
                    document.querySelector(".menu-wrapper").style.height="1500px";
                };
                $('.menuContainer').html(`<div class="row filter-box2 popup-gallery">
                <div class="filter-item cat22" style="text-align: center;">
                    <h1>Drinks</h1>
                    <p class="menu-subtitle">Mixed Pot Drinks By The Gallon $12</p>
                </div>
                <div class="col-md-6 filter-item cat22 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>I</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Iced Fruited Sorrel Tea</h5>
                            <p>Hibiscus With Hints Of Orange Apple And Pear</p>
                       </div>
                       <div class="menu-price d-flex justify-content-center">
                            <div>
                                <p><span>1 Gallon</span></p>
                                <p class="ms-3"><span>$12</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item cat22 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>P</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Peachy Island Punch</h5>
                            <p>(Georgia Peach Meet A Cool Island Wave Of Flavor)</p>
                       </div>
                       <div class="menu-price d-flex justify-content-center">
                            <div>
                                <p><span>1 Gallon</span></p>
                                <p class="ms-3"><span>$12</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 filter-item cat22 mt-3">
                    <div class="menu-item d-flex flex-column">
                        <div class="menu-item-img">
                            <h1>M</h1>
                        </div>
                       <div class="menu-content text-center">
                            <h5 class="menu-title">Mixed Pot Crosstown</h5>
                            <p>(Iced Sorrel & Black Tea)</p>
                       </div>
                       <div class="menu-price d-flex justify-content-center">
                            <div>
                                <p><span>1 Gallon</span></p>
                                <p class="ms-3"><span>$12</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>`);
            });

            //Uses the jquery isotope library to filter through the menu items
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });
            
            //Removes the active class and adds it to any li element that is clicked within the div that holds the class ".filter-btns"
            $(".filter-btns li").each(function(){
                $(this).on("click", function(){
                    $(this).siblings("li.active").removeClass("active"); 
                    $(this).addClass("active");
                });
            });
        }
    });

    //Onload checks if the div containing the ".filter-box2" class is not empty
    $(window).on('load', function () {
        if( $(".filter-box2").children().length > 0 ) {
            //If the div is not empty the jquery isotope library is used to filter thru it's content
            $(".filter-box2").isotope({
                itemSelector: '.filter-item',
                masonry: {
                  columnWidth: 2
                },
            });

            //items within the div containing the "filter-btns class are used to further filter thru the contents"
            $('.filter-btns').on( 'click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box2").isotope({ filter: filterValue });
            });

            //each li element that is currently being used to filter through the content is given the active class individually when it is clicked
            $(".filter-btns li").each(function(){
                $(this).on("click", function(){
                    $(this).siblings("li.active").removeClass("active"); 
                    $(this).addClass("active");
                });
                
            });
        }
    });

    //copyright date
    var date = new Date().getFullYear();
    $('#date').html(date);



})(jQuery);



//CSS Gallery
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");
const modal5 = document.getElementById("myModal5");
const modal6 = document.getElementById("myModal6");
const modal7 = document.getElementById("myModal7");
const modal8 = document.getElementById("myModal8");
const modal9 = document.getElementById("myModal9");
const modal10 = document.getElementById("myModal10");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById("myImg1");
const img2 = document.getElementById("myImg2");
const img3 = document.getElementById("myImg3");
const img4 = document.getElementById("myImg4");
const img5 = document.getElementById("myImg5");
const img6 = document.getElementById("myImg6");
const img7 = document.getElementById("myImg7");
const img8 = document.getElementById("myImg8");
const img9 = document.getElementById("myImg9");
const img10 = document.getElementById("myImg10");

const modalImg1 = document.getElementById("img01");
const modalImg2 = document.getElementById("img02");
const modalImg3 = document.getElementById("img03");
const modalImg4 = document.getElementById("img04");
const modalImg5 = document.getElementById("img05");
const modalImg6 = document.getElementById("img06");
const modalImg7 = document.getElementById("img07");
const modalImg8 = document.getElementById("img08");
const modalImg9 = document.getElementById("img09");
const modalImg10 = document.getElementById("img10");
const captionText = document.getElementById("caption");

img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText.innerHTML = `<figcaption><p class="text-center h2">Southern Catfish (True American Southern style)</p>
    
    <p>Here in the United States there’s been a silent war going on. As in common, Southern roots and traditions of the way we eat are being changed in the food industry. In the south a fish fry is always a big day and you get together and have fish and sides with the local families and friends. In New Jersey I can recall growing up waiting for what we call “Fish Friday” to come around. We would have whitings, porgies ,catfish and others. We ate them with bread & hot sauce as sandwiches. We ate them as meals with a garden salad or potato salad, rice and beans ,macaroni and cheese and a number of sides. No matter what, one thing always remained the same.
        The fish was always fried in smokin hot oil coated in seasoned corn meal. Nope! Not Panko crumbs, not a flour blend, not batter with seasoning that’s right cornmeal. There’s absolutely nothing that can replace that texture, that special grainy crunch, that Southern flavor or the culture when eating a nice piece of delicate catfish made the right way. Let us remind you. Box fish fry won’t cut it. This here truth dashed with a little hot sauce, tartar or on its own. Makes the best sandwich. Makes the best plate with cool potato salad or whatever you want. Our promise is that it will be true American southern fare at its best. No fusion in this item!</p>
</figcaption>`;
}

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText.innerHTML = this.alt;
}

img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText.innerHTML = this.alt;
}

img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
    captionText.innerHTML = this.alt;
}

img7.onclick = function(){
    modal7.style.display = "block";
    modalImg7.src = this.src;
    captionText.innerHTML = this.alt;
}

img8.onclick = function(){
    modal8.style.display = "block";
    modalImg8.src = this.src;
    captionText.innerHTML = this.alt;
}

img9.onclick = function(){
    modal9.style.display = "block";
    modalImg9.src = this.src;
    captionText.innerHTML = this.alt;
}

img10.onclick = function(){
    modal10.style.display = "block";
    modalImg10.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];
var span9 = document.getElementsByClassName("close9")[0];
var span10 = document.getElementsByClassName("close10")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}

span5.onclick = function() {
    modal5.style.display = "none";
}

span6.onclick = function() {
    modal6.style.display = "none";
}

span7.onclick = function() {
    modal7.style.display = "none";
}

span8.onclick = function() {
    modal8.style.display = "none";
}

span9.onclick = function() {
    modal9.style.display = "none";
}

span10.onclick = function() {
    modal10.style.display = "none";
}













