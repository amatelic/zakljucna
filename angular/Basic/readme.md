Angular
===============

##Pomembno 
	-	poglej si lexical scopin
	-   MVVM(model-View-ViewModel)
	-	dodajanje angularjevih atributov
	- 	če damo naš angular file v
	glavo naše strani potem se nam ne prikazujejo templating ime {{test}}
	druga

##Osnove angulara
 Angular ugrabi podatke is html strani in jih okrepi


 ```javascript 
	angular.module('app', []);
	//the empty array is used for inserting modules(dependency injection)
```
## Controllers 
Namen uporabe controlerjev je interacija med modelom in viewem.
Tu je prostor kjer se presentacijska logika.

 ```javascript 
	angular.module('app', [])
	.controller('MainController', function(){});
```

###Scope 
Angular je razdelen v dva scopa to sta $rootSocpe in $scope
Bistvena razlika teg dveh scopih je ta, da $rootScope je prvi, ki se kreira in je glavni. Od njega se kreirajo novi $scopi, ki so podrejeni njemu.

Drugače pa $scope imajo v angularju controlerji  in data-bindings



##Dodatki linki
- http://stackoverflow.com/questions/16125872/why-ng-bind-is-better-than-in-angular
- http://blog.manishchhabra.com/2013/09/angularjs-service-vs-factory-with-example/

