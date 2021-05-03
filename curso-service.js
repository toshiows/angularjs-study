angular.module('app').factory("CursoService", CursoService);
CursoService.$inject = ["$http"]
    
    function CursoService($http){
        var service = {
            exec_GET: function() {
                return $http.get('http://localhost:3000/clientes').then(tratarResposta, tratarErro);
            }
        }

        function tratarResposta(response) {
            return response.data;
        }

        function tratarErro(error) {
            return error.data;
        }

        return service;
    }