# Git Hooks

Comme premier exercice, nous allons mettre en place des Git Hooks. 

* Dans le projet, installez le linter `ESLint`

```javascript
npm i --save-dev eslint
```

* Initiez ESLint en exécutant la commande `./node_modules/.bin/eslint --yes`. Vous pouvez utiliser une configuration existante, celle de Google par exemple.

* Ajoutez un script `lint` dans le fichier package.json

* Dans un répertoire hooks, créez un fichier `pre-commit`

* Copiez le code ci-dessous dans ce fichier

```shell
#!/bin/sh

echo 'Running ESLint';

npm run lint

if [ $? -ne 0 ]; then
    echo "We found files with error"
    exit 1;
else
    echo "ESLint OK"
    exit 0;
fi
```

* Créez un lien symbolique vers ce fichier

```shell
ln hooks/pre-commit .git/hooks/pre-commit
```

* Testez votre nouveau hook