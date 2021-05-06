angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'];

    function CadastroController($location, CursoService, $routeParams) {
        let vm = this;
        vm.titulo = 'Cadastro';
        vm.cliente = {};
        vm.id = undefined;
        vm.opcaoBotao = 'Cadastrar';

        if($routeParams.id) {
            vm.id = $routeParams.id;
            buscarId(vm.id);
            vm.opcaoBotao = 'Editar';
        }

        vm.voltar = function() {
            $location.path('/');
        }

        vm.cadastrar = function() {
            if(vm.id){
                atualizar(vm.cliente);
                return;
            }

            CursoService.exec_POST(vm.cliente).then(function(response){
                if(response) {
                   vm.voltar();
                }
            })
        }

        function buscarId(id) {
            CursoService.exec_GET_ID(id).then(function(response){
                if(response) {
                   vm.cliente = response;
                }
            })
        }

        const atualizar = (cliente) => {
            CursoService.exec_PUT(cliente).then(function(response){
                if(response) {
                   vm.voltar();
                }
            })
        }

        vm.limpar = function() {
            vm.cliente = {}
        }

    }