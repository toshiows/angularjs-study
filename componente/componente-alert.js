angular.module('app').component('alertToUser', {
    templateUrl: 'componente/alert.html',
    bindings: {
        mensagem: '=',
        tipo: '='
    },
    controllerAs: 'vm',
    controller: function() {
        let vm = this;
        vm.tipoClasse = undefined;

        vm.$onInit = function() {
            console.log(vm.tipo);
        

        if(vm.tipo == 'sucesso') {
            vm.tipoClasse = 'alert alert-success';
        }
        else if(vm.tipo == 'erro') {
            vm.tipoClasse = 'alert alert-danger';
        }
    }
}
})