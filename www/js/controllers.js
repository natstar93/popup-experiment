angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPopover, $ionicPopup, $timeout) {
  $ionicPopover.fromTemplateUrl('templates/cluepopover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'The Shard',
     template: 'It\'s like well big innit',
     scope: $scope,
    buttons: [
      { text: 'Take Photo' }]
   });
   alertPopup.then(function(res) {
     console.log('Clicked on the Shard');
   });
 };
 $scope.showAlert2 = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'The Gherkin',
     template: 'Tasty',
     scope: $scope,
    buttons: [
      { text: 'Take Photo' }]
   });
   alertPopup.then(function(res) {
     console.log('Clicked on Tower Bridge');
   });
 };
})

.controller('PhotoAlbumCtrl', function($scope) {});
