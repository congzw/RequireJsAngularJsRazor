requirejs(['angular', 'nbLog', 'mainApp'], function (angular, nbLog, mainApp) {

    nbLog.debug('mainAppInit.js');
    var $document = angular.element(document);
    $document.ready(function () {
        var appName = mainApp.name;
        nbLog.debug('mainAppInit.js => angular.bootstrap: ' + appName);
        angular.bootstrap(document, [appName]);
        $document.find('html').addClass('ng-app');
    });
    return mainApp;
});
