angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location'];

    function CadastroController($location) {
        vm = this;
        vm.titulo = 'Cadastro';

        vm.voltar = function() {
            $location.path('/');
        }
    }