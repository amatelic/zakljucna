Filter methods
===============

## Angular filter methods
Angular filtri so vrsta filtrov, ki nam omočajo iskanje specifičnih podatkov  in tudi organiziranje leteh. Filtre lahko uporbljamo direktno v html

```html 
	{{  filter izraz |  filter: izraz : primerjalnik  }}

```

ali pa z pomočjo spremenljivke $filters, ki jo s pomočjo dependency injection dodamo kontrolerju.
