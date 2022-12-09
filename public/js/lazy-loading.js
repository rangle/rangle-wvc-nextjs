
// Find elements with attribute 'img.ll-data-src'
// Assign its url to proper attribute. 
// There are 2 cases. Div with background, and img with src. 

var lazy_loading_controller = lazy_loading_controller || {};

lazy_loading_controller = {
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


// data-ll-path
// lzld
lazy_loading_controller.load = {
    init: function () {
        $.each($('.lzld.lzld-deferred'), function () {
            var path = $(this).attr('data-ll-path');
            $(this).attr('src', path);
        });
    },
};