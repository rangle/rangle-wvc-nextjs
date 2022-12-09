$('.rmtMediaSlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: '<button type="button" class="rtm-slick-next"><i class="arrow fa fa-angle-left"><span class="slider-nav-label">Slide left</span></button></a>',
    nextArrow: '<button type="button" class="rtm-slick-prev"><i class="arrow fa fa-angle-right"><span class="slider-nav-label">Slide right</span></button></a>',
    centerMode: true,
    focusOnSelect: true
});
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
  $(this).ekkoLightbox({
      alwaysShowClose: true,
      showArrows: true,
    leftArrow: '<button aria-label="Previous image"><span>&#10094;</span></button>',
    rightArrow: '<button class="rightArrow" aria-label="Next image"><span>&#x276F;</span></button>'

  });
  $(".ekko-lightbox-nav-overlay a").attr("aria-describedby", "button")
  $(".ekko-lightbox-nav-overlay a button").css({
    "background-color": "transparent",
    "outline": "none",
    "background-repeat": "no-repeat",
    "border": "none",
    "text-align": "left",
  })
  $(".rightArrow").css({
    "text-align": "right",
  })
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const modal = document.querySelector('.ekko-lightbox');
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];
  document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();






    $(".ekko-lightbox").removeAttr("aria-hidden").removeAttr("tabindex").focus();
});
$(document).ready(function() {
    var lat = $('#weather').attr('data-lat');
    var lng = $('#weather').attr('data-lng');

    function displayErrorForWeatherWidget() {
        var errorMsg = "Cannot load the weather information for this area"
        if (jQuery("body").hasClass("FRCA")) {
            errorMsg = "Les données métérologiques de cette région ne peuvent pas être téléchargées"
        }
        return errorMsg;
    }

    try {
        $.simpleWeather({
            location: lat + ',' + lng,
            woeid: '',
            unit: 'c',
            success: function (weather) {
                html = '<div class="currently"><i class="icon-' + weather.code + '"></i>' + checkWXLang(weather.currently) + '</div>';
                html += '<h2><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
                $("#weather").html(html);
            },
            error: function (error) {
                $("#weather").html('<p>' + displayErrorForWeatherWidget() + '</p>');
            }
        });
        console.log("Weather retrieved.");
    } catch (ex) {
        $("#weather").html('<p>' + displayErrorForWeatherWidget() + '</p>');
    }

    function checkWXLang(weather){
        if (jQuery("body").hasClass("FRCA")){
            for (var key in myWXcodes) {
                if (key === weather){
                    var myWX = myWXcodes[key]
                    return myWX;
                }
            }
            return "Sans objet";
        }
        return weather;
    }
    var myWXcodes = ({
        "Tornado": "Tournade",
        "Tropical storm": "Tempête tropicale",
        "Hurricane": "Ouragan",
        "Severe thunderstorms": "Orages violents",
        "Thunderstorms": "Orages",
        "Mixed rain and snow": "Mélange de pluie et de neige",
        "Mixed rain and sleet": "Mélange de pluie et de grésil",
        "Mixed snow and sleet": "Mélange de neige et de grésil",
        "Freezing drizzle": "Bruine verglaçante",
        "Drizzle": "Bruine",
        "Freezing rain": "Pluie verglaçante",
        "Rain": "Pluie",
        "Showers": "Averses",
        "Snow flurries": "Averses de neige",
        "Light snow showers": "Averses de neige légère",
        "Blowing snow": "Poudrerie",
        "Snow": "Neige",
        "Hail": "Grêle",
        "Sleet": "Grésil",
        "Dust": "Poussièreux",
        "Foggy": "Brûmeux",
        "Haze": "Brûme",
        "Smoky": "Enfûmé",
        "Blustery": "Rafales",
        "Windy": "Venteux",
        "Cold": "Froid",
        "Cloudy": "Nuageux",
        "Mostly cloudy (night)": "Quelques éclaircis (nuit)",
        "Mostly cloudy (day)": "Quelques éclaircis (jours)",
        "Partly cloudy (night)": "Partiellement nuageux (nuit)",
        "Partly cloudy (day)": "Partiellement nuageux (jours)",
        "Clear (night)": "Clair (nuit)",
        "Sunny": "Ensoleillé",
        "Fair (night)": "Beau (nuit)",
        "Fair (day)": "Beau (jours)",
        "Mixed rain and hail": "Mélange de pluie et verglats",
        "Hot": "Chaud",
        "Isolated Thunderstorms": "Orages isolés",
        "Scattered thunderstorms": "Orages dispercés",
        "Scattered thunderstorms": "Orages dispercés",
        "Scattered showers": "Averses dispercées",
        "Heavy snow": "Fortes chûtes de neige",
        "Partly cloudy": "Partiellement nuageux",
        "Thundershowers": "Averses orageuses",
        "Snow showers": "Averses de neige",
        "Isolated Thundershowers": "Orages isolés",
        "Mostly Sunny": "Généralement ensoleillé",
        "Breezy": "Venteux"
    });
});

function initMap() {
    var maplat = parseFloat($('#weather').attr('data-lat'));
    var maplng = parseFloat($('#weather').attr('data-lng'));
    var location = {lat: maplat, lng: maplng};
    var map = new google.maps.Map(document.getElementById('exploreMap'), {
        zoom: 6,
        center: location,
        mapTypeId: 'terrain',
        disableDefaultUI: true,
        gestureHandling: 'none',
        zoomControl: true,
        minZoom: 3, 
        maxZoom: 6,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter()
        google.maps.event.trigger(map, "resize")
        map.setCenter(center)
    });
}
$('.community-needs_readmore').click(function(){
    $(this).prev('.community-needs_content').addClass('toggled');
    $(this).hide();
});
$('.phase-navigaiton_link').click(function(){
    var phase = $(this).attr('data-phase');
    $(this).parents('.phase').toggleClass('hidden');
    $('.' + phase).toggleClass('hidden');
});
