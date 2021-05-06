angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

    function HomeController($location, CursoService) {
        let vm = this;
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

        vm.deletarCliente = function(id) {
            CursoService.exec_DELETE(id).then(function(response){
                
            })
        }
    }