Singeltons and Factories
===============


## Services in Factories 
- Services so normalni singeltoni, to pomeni da so 	initializirani samo enkarat
- Dobra praksa uporabljati Pascal Case primer "my service" bi bil "MyService"

Service metoda je namenjena initializaciji ene določene funkcjonalnosti, kot primer (mail, registracija)

V servisah shranjujemo vso logiko našega modela podatkov in podjetniške logike, kot primer klicov v REST api 

### Pomembno 
- service kreira samo konstruktor objekt, ki se klice s pomocjo besede new

##Dodatki linki
- http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/
- http://blog.manishchhabra.com/2013/09/angularjs-service-vs-factory-with-example/

