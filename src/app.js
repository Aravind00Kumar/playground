(function () {
    'use strict'
    angular.module('app', ['ui.router'])
        .run(['$rootScope', '$timeout', function ($rootScope, $timeout) {

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $timeout(function () {
                        var elements = document.querySelectorAll('textarea[name="code"]');
                        elements.forEach(function (element) {
                            CodeMirror.fromTextArea(element, {
                                lineNumbers: true,
                                matchBrackets: true,
                                readOnly: true,
                                viewportMargin: Infinity
                            });
                        }, this);
                    })
                });
        }])

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
                })

                // JAVASCRIPR                
                .state('js', {
                    url: "/js",
                    template: '<ui-view></ui-view>'
                })
                .state('js.class', {
                    url: "/class",
                    templateUrl: "js/class/js.class.html",
                })
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
    });

})();


