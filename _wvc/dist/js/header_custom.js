var header_custom_controller = header_custom_controller || {};

/* -------------------------------------------------------------------------- *\
    THE "controller" OBJECT
    Takes care of all the stuff the controller needs to work
\* -------------------------------------------------------------------------- */
header_custom_controller = {
    init: function () {
        var self = this,
            obj;

        for (obj in self) {
            if (self.hasOwnProperty(obj)) {
                var _method = self[obj];
                if (_method.init !== undefined) {
                    _method.init();
                }
            }
        }
    }
};


header_custom_controller.langToggleLoseFocused = {
    selector: '.grid-search',
    init: function () {
        $(this.selector).on('DOMNodeInserted', function (e) {
            if ($(e.target).hasClass('gsc-input') && $(e.target).is('input')) {                
                $('input.gsc-input').on("keydown", function (evt) {
                    var kc = evt.which || evt.keyCode;
                    if (kc == 13) {
                        window.location.href = window.location.protocol + "//" + window.location.host + "/search?q=" + $('input.gsc-input').val();
                    }
                });
            }
        });
    }
};