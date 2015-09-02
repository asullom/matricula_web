app.factory("naturalPersonService",function ($http) {
	var url="http://localhost:8000/carga/naturalpersons/";
	return {
		"list": function (){
			return $http.get(url).then(function(r){
				return r;
			});
		},
		"select":"find by id",
		"create":function (d){
			return $http.post(url, d).then(function(r){
				return r;
			});
		},
		"update":"editar",
		"delete":"elimina",
	}
});