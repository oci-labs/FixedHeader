(function () {
    'use strict';

    describe('fixed-header directive', function () {
        beforeEach(module('oci.fixedHeader'));

        var compile;
        var scope;

        beforeEach(inject(function ($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
        }));

        it('should render html for fixed header', function () {
            var html =
                '<div><table oci.fixed-header><thead><tr><th>one</th><th>two</th></tr></thead></table></div>';
            var elem = angular.element(html);
            compile(elem)(scope);
            scope.$digest();

            expect(elem.find('>div.fixed-table-container').length).toBe(1);
            expect(elem.find('>div.fixed-table-container>div.fixed-table-container-inner').length).toBe(1);
            expect(elem.find('>div.fixed-table-container>div.fixed-table-container-inner>table').length).toBe(1);

            expect(elem.find('thead > tr').length).toBe(2);
            expect(elem.find('thead > tr').eq(0).hasClass('hidden-header')).toBeFalsy();
            expect(elem.find('thead > tr').eq(1).hasClass('hidden-header')).toBeTruthy();
            expect(elem.find('thead > tr').eq(0).find('th').eq(0).html()).toBe('<div class="th-inner">one</div>');
            expect(elem.find('thead > tr').eq(0).find('th').eq(1).html()).toBe('<div class="th-inner">two</div>');
            expect(elem.find('thead tr').eq(1).find('th').eq(0).html()).toBe('<div class="th-inner">one</div>');
            expect(elem.find('thead > tr').eq(1).find('th').eq(1).html()).toBe('<div class="th-inner">two</div>');
        });
    });
})();
