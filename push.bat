@echo off
echo Ajout de tous les fichiers modifiés...
git add -A
echo Commit des modifications avec le message "test"...
git commit -m "commit"
echo Push forcé vers la branche main...
git push -f origin master
echo Terminé.
pause