##Modele pattern

Najprej, bi samo predstavil zgodovino modul patenta in zakaj ga uporabljati.Javascript je programski jezik,ki ima globalni obseg. To pomeni vse spremenljivke, ki jih initializiramo so globalne. Takšen vrsta obsega je zelo nevarna saj je možnost, da lahko prepišemo po pomoti neko vrednost spremenljivke in to si ne želimo. Zato so prve implementaicje module patenta prišle od programerja Eric Miraglia, ki jo je imenoval anonymous closure. Kaj  sploh je anonymous closure. Kratko  in jedrnato to je samo navadne funkcije, ki jih takoj izvedemo, ampak klučna lastnost take pristopa je ta, da so vse spremenljivke v funkcije lokalne in ne morejo dostopati do globalne obsega. Ampak še vedno se moramo paziti, da initializiramo spremenljivko z besedo var, če ne v naprotnem primeru je spremenljivka še vedno globalna.

 ```javascript 
 	(function(){
		//inicializacija lokalnih spremenljivk
 	}());

```

O te implementacije je že veliko časa poteklo in veliko programerov, uporablja različne knjižnice ali frameworke, in tukaj nastane problem, kjer lahko pride do kake kolizije z drugo knjižnico,  zoo so izumili Način module exporta,kjer je način isti sam z majhno spremembo funkcija je shranjena v spremenljivko, za nadalno uporabo in tudi vrednosti niso vse dostopne. V bistvu vse vrednosti, ki jih želimo imeti jih z pomočjo stavka return vrnemo. 

 ```javascript 
 	var module = (function(){
		var prva = 1;
		var druga = 1;

		return {
			a: prva;
		}
 	}());

module.a // vrne 1;
module.b // undefinde;

```
### Novi es6 model

##Linki na temo modules
http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html