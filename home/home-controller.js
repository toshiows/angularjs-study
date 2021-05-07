angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

    function HomeController($location, CursoService) {
        let vm = this;
        vm.titulo = 'Home';
        vm.clientes = [];
        vm.erro = false;

        vm.navegar = function(rota, id) {
            $location.path(rota + '/' + id)
        }

        vm.listarClientes = function() {
            CursoService.exec_GET().then(function(response){
                if(response) {
                   vm.clientes = response;
                   //console.log(response);
                }
                else {
                    vm.erro = true;
                }
            })
        }

        vm.deletarCliente = function(id) {
            CursoService.exec_DELETE(id).then(function(response){

            })
        }

        vm.editar = function(id) {
            vm.navegar('Cadastro', id);
            /* CursoService.exec_PUT(id).then(function(){
                
            }) */
        }
    }