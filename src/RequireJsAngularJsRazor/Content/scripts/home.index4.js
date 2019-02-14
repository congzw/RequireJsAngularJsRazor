require(['nbLog', 'mainAppInitDelay'], function (nbLog, mainAppInitDelay) {

    nbLog.debug('<<< mainAppInitDelay');

    require(['jquery', 'daterangepicker', 'mainApp'], function ($, daterangepicker, mainApp) {

        nbLog.debug('DemoIndexPage script begin!');

        setTimeout(function () {

            nbLog.debug('DemoIndexPage run very long time!!!');

            mainApp.controller('demoCtrl', function ($scope) {
                $scope.message = "from angular controller!";
            });

            nbLog.debug('DemoIndexPage script done!');
            mainAppInitDelay.resumeBootstrap(mainApp.name);

        }, 500);

    });
});