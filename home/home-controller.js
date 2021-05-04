angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

    function HomeController($location, CursoService) {
        vm = this;
        vm.titulo = 'Home';
        vm.clientes = [];

        vm.navegar = function() {
            $location.path('cadastro')
        }

        vm.listarClientes = function() {
            CursoService.exec_GET().then(function(response){
                if(response) {
                   vm.clientes = response;
                   //console.log(response);
                }
            })
        }
    }