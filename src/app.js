(function () {
    'use strict'
    angular.module('app', ['ui.router'])
        // route configuration
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");


            // CSS demo routes
            $stateProvider
                .state('css', {
                    url: "/css",
                    template: '<ui-view></ui-view>'
                })
                .state('css.margin', {
                    url: "/margin",
                    templateUrl: "css/margin/css.margin.html",
                })
                .state('css.border', {
                    url: "/border",
                    templateUrl: "css/border/css.border.html",
                });
        }])

        .controller('HomeController', [function () {
            var vm = this;
            this.title = 'Home';
        }])

        .controller('AboutController', [function () {
            var vm = this;
            this.title = 'About';
        }]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    })
})();