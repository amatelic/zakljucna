EcmaScript6
=========

##Kaj je ecma script

EcmaScript je scriptni jezik, ki se ga najbolj pogosto uporablja na uporabniškem odjemalcu na spletu to sta primer JavaScript in JScript. Drugače, kjer lahko zasledimo še implementacije EcmaScripta pa so v AdobuFleshu pod imenom ActionScript.
EcmaScript je standiriziran jezik  pod specifikacijah ECMA-262 in ISO-IEC 16262.

## EcmaScript Verzije

Verzija		  | Datum objave | Spremebbe	| Edition
------------- | -------------|------------- | -------------
1			  |		?		 |		?		 |Guy L. Steele, Jr.|
2			  |		?		 |		?		 |Mike Cowlishaw|
3			  |		?		 |		?		 |Mike Cowlishaw|
4			  |		?		 |		?		 |		?		 |
5			  |		?		 |		?		 |Pratap Lakshman, Allen Wirfs-Brock|
5.1			  |		?		 |		?		 |Pratap Lakshman, Allen Wirfs-Brock|
6			  |		?		 |		?		 |Allen Wirfs-Brock|
7			  |		?		 |		?		 |				 |

## Novosti v ees

###Moduli v es6

Velik problem, ki ga ima programski jezik javacript je ta, da ni imela  nobene možnosti importanja knjižnic, modulov ki so bili zasebni ali dostopni vsem. Zato so bili pred es6 ustvarjena dva standarda, 
commomJS, ki je zaslavel v node.js skupnosti in se izvaja sinhrono in  AMD, ki se je uvedel v brskalniki, primer take knjižnice je require.js, ki se izvaja asihrono.

####CommonJS

CommonJS deluje tako da naše datoteke, ki jih želimo imeti javno dodamo spredaj pred vsako funkcijo ali spremenljivko besedo export. Vse kar nima besede export spredaj je nevidna izven import funkcije.
Primer exporta
 ```javascript
	var a = 3; //privatna
	var b = 3; //privatna
 	export.sum = function(){
 		return a + b; //javna
 	}
```
Primer klicanja modula ali knjižnice je zelo preprosto vse kar naredimo je da kličemo funkcijo require plus ime datoteke

Primer import
 ```javascript 

 	require('./Kolekcija');//Primer klica datoteke Kolekcija.js

 	sum();//vrne 6
 	a// vrne undefined
 	
 	//Primer klica modula v spremenljivko
 	var _ = require('underscore');
```
####AMD
- še manka

####Es6 modules
Ampak v es6 standardu se je uvedel standar commonJS, tukaj je primer importa datoteke in knjižnice v spremenljivko.
Primer importa
 ```javascript 
	import { Dist } from "Kolekcija.js"; //
	import { $ } from "jquery.js";
```
in še primer exporta datoteke
Primer importa
 ```javascript 
	var local = 123;
	export.hello = function(){
	return "Hello word!";
}
```