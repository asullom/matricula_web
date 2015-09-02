var app = angular.module("app", [
	'ngRoute',
	]);

app.config(function ($routeProvider) {
	$routeProvider.when("/test",{
		templateUrl: "app/views/test.html"
	});
	$routeProvider.when("/np",{
		templateUrl: "app/views/naturalPerson.html"
	});
});
