var app = angular.module('LibraryApp', ['ui.router']);

app.controller('mainController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.title = 'Favorites';
  $scope.promo = 'Search: ';
  $scope.search = {id: ""};
  $scope.isLibraryVisible = true;

  dataService.getBooks(function (response) {
    console.log(response.data);
    $scope.books = response.data;
  });

  $scope.plusOne = function (index) {
    $scope.books[index].likes += 1;
  };

  $scope.minusOne = function (index) {
    $scope.books[index].dislikes += 1;
  };

  $scope.toggleLibrary = function () {
    $scope.isLibraryVisible = !$scope.isLibraryVisible;
  };
}]);

app.service('dataService', ['$http', function ($http) {
  this.getBooks = function (callback) {
    $http.get('data/books.json')
      .then(callback)
  };
}]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  var states = [
    {
      name: 'home',
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'mainController'
    },
    {
      name: 'footer',
      templateUrl: 'views/footer.html',
    },
    {
      name: 'about',
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'mainController'
    },
    {
      name: 'about.easy',
      template: 'That was easy!',
      controller: 'mainController'
    }];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });
});





