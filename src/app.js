(function () {
    'use strict'
    angular.module('app', ['ui.router'])
        // route configuration
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");


            // CSS demo routes
            $stateProvider.state('css', {})
                .state('home', {
                    url: "/home",
                    templateUrl: "home.html",
                })
                .state('margins', {
                    url: "/margins",
                    templateUrl: "css/margins/margins.html",
                    //parent: "css"
                })
                .state('borders', {
                    url: "/borders",
                    templateUrl: "css/borders/borders.html",
                    //parent: "css"

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