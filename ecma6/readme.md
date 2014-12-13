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

## Kaj je novega v ecma6

###Modules in es6

Največji problem, ki ga naletimo pri javascriptu je ta, da nima pravega načina imporatanja knjižnic 

Primer commonJS
 ```javascript 
 	require('./Kolekcija');
 	
 	var _ = require('underscore');

```

Primer exporta
 ```javascript 
 	module Kolekcija{
 		export function Dist(){console.log("module")}
 	}

```
Primer importa
 ```javascript 
	import { Dist } from "Kolekcija.js";
	import { $ } from "jquery.js";
```