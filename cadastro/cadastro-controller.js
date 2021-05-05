angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location', 'CursoService'];

    function CadastroController($location, CursoService) {
        vm = this;
        vm.titulo = 'Cadastro';
        vm.cliente = {};

        vm.voltar = function() {
            $location.path('/');
        }

        vm.cadastrar = function() {
            CursoService.exec_POST(vm.cliente).then(function(response){
                if(response) {
                   vm.voltar();
                }
            })
        }

        vm.limpar = function() {
            vm.cliente = {}
        }

    }