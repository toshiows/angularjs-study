angular.module('app').factory("CursoService", CursoService);
CursoService.$inject = ["$http"]
    
    function CursoService($http){

        const restAPI = 'http://localhost:3000/clientes';

        var service = {
            exec_GET: function() {
                return $http.get(restAPI).then(tratarResposta, tratarErro);
            },
            exec_POST: function(cliente) {
                return $http.post(restAPI, cliente).then(tratarResposta, tratarErro);
            },
            exec_DELETE: function(id) {
                return $http.delete(restAPI+'/' + id).then(tratarResposta, tratarErro);
            },
            exec_GET_ID: function(id) {
                return $http.get(restAPI+'/' + id).then(tratarResposta, tratarErro);
            },
            exec_PUT: function(cliente) {
                return $http.put(restAPI+'/'+cliente.id,  cliente).then(tratarResposta, tratarErro);
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