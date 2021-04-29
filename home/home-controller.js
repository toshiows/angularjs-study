angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location'];

    function HomeController($location) {
        vm = this;
        vm.titulo = 'Home';

        vm.navegar = function() {
            $location.path('cadastro')
        }
    }