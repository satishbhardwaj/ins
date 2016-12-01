angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('https://dashboard.heroku.com/apps/mysterious-anchorage-46209');
    });