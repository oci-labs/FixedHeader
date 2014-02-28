/*
 @license OCI Fixed Header version 0.1.0
 ⓒ 2014 OCI https://github.com/objectcomputing/FixedHeader
 License: MIT
 */

(function () {
    'use strict';

    angular.module('oci.fixedHeader', [])
        .directive('oci.fixedHeader', function () {
            return function link(scope, elem) {
                // Wrap the contents of every header cell with div.th-inner so that the
                // CSS can relocate it.
                var header = elem.find('thead').find('tr');
                angular.forEach(header.find('th'), function (th) {
                    angular.element(th).contents().wrap('<div class="th-inner"></div>');
                });

                // Make a clone of the header that we hide using css. The purpose of this
                // is to allow the width of the contents of the header to be included
                // in the calculation of the widths of the columns
                var hiddenHeader = header.clone();
                hiddenHeader.addClass('hidden-header');
                header.after(hiddenHeader);

                // wrap the table in a couple of divs that bring in important css modifications
                elem.wrap('<div class="fixed-table-container"></div>');
                elem.wrap('<div class="fixed-table-container-inner"></div>');
            };
        });
})();
