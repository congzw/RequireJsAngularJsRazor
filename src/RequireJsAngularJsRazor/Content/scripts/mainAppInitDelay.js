define(['nbLog'], function (nbLog) {

    function resumeBootstrap(appName) {
        require(['nbLog', 'angular'], function (nbLog, angular) {
            angular.element().ready(function () {
                nbLog.debug('mainAppInitDelay.js resumeBootstrap for: ' + appName);
                angular.resumeBootstrap([appName]);
            });
        });
    }

    nbLog.debug("mainAppInitDelay.js NG_DEFER_BOOTSTRAP!");
    window.name = "NG_DEFER_BOOTSTRAP!";
    return {
        resumeBootstrap: resumeBootstrap
    };
});