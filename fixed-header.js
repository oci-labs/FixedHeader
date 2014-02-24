(function () {
    'use strict';

    angular.module('fixedHeader', [])
        .directive('fixedHeader', function () {
            return function link(scope, elem) {
                var header = elem.find('thead').find('tr');
                angular.forEach(header.find('th'), function (th) {
                    angular.element(th).contents().wrap('<div class="th-inner"></div>');
                });

                var hiddenHeader = header.clone();
                hiddenHeader.addClass('hidden-header');
                header.after(hiddenHeader);

                // wrap the table in a couple of divs that bring in important css modifications
                elem.wrap('<div class="fixed-table-container"></div>');
                elem.wrap('<div class="fixed-table-container-inner"></div>');
            };
        });
})();
