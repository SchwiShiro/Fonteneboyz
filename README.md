# Fonteneboyz
Git lærings prosjekt

Fresh Pullrequest


------- SLETTE FERDIGE BRANCHER ----------

Først sjekker du at branchen er oppdater til main:
1: Hvilken branch er du i? Sjekk det med: git branch (vis du står i main vil det være et * foran).
2: Sjekk at main er oppdatert mot git: git fetch    så    git status.
3: Sjekk at branch allerede er merget: git branch --merged (alle brancher du får i terminalen er merget inn i main som oftest).
4: Vis du ser i terminalen: feature/<BRANCH-NAME> så er det trykt å slette den branchen fra lokal VSCode med: git branch -d feature <BRANCH-NAME>.
5: Se hvilke brancher som ikke er merget: git branch --no-merged  alt i terminalen med feature/<BRANCH-NAME> er ikke merget med main enda.
6: Se forskjellen mellom 2 brancher med: git diff main..feature/<BRANCH-NAME> (vis det ikke skrives noe ut i terminalen er det ikke noe forskjell).
7: Vis du vil slette branchen også fra github: git push origin --delete <BRANCH-NAME>