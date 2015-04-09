app.controller('startController',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.showHeader=true;
	
	$scope.init = function(){		
		var meta=document.getElementsByTagName("meta");
		for (var i=0; i<meta.length; i++) {
		    if (meta[i].name.toLowerCase()=="description") {
		        meta[i].content= "CloudBoost is one complete backend and storage solution for your apps which does data-storage, search and realtime.";
		    }

		    if (meta[i].name.toLowerCase()=="keywords") {
		        meta[i].content= "baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage";
		    }
		}

		document.title = "CloudBoost : One API to build your next big thing.";		
		window.seojsSnapshotReady = true;
	};

	$scope.toCta = function(){
    	$('html,body').animate({scrollTop: $('#cta').offset().top-200},500); //smooth scroll animation.
    };

 }]);
