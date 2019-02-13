require.config({
    paths: {
        'jquery': '/Content/libs/jquery/jquery-2.1.0'
        , 'moment': '/Content/libs/date-time/moment'
        , 'daterangepicker': '/Content/libs/date-time/daterangepicker'
        , 'toastr': '/Content/libs/toastr/toastr'
        , 'angular': '/Content/libs/angular/angular'
        , 'ngRoute': '/Content/libs/angular/angular-route'
        , 'bootstrap': '/Content/scripts/bootstrap'
        , 'zqnb': '/Content/scripts/zqnb'
        , 'nbLog': '/Content/scripts/zqnb.log'
        , 'mainApp': '/Content/scripts/mainApp'
        , 'mainAppInitDelay': '/Content/scripts/mainAppInitDelay'
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"]
        },
        'daterangepicker': {
            deps: ['moment']
        }
    }
});