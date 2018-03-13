# browserify project

## Cahier des charges

- votre application doit contenir trois onglets : « à faire », « fait » et « tout ». Ces onglets affichent respectivement ce qui est « à faire », ce qui est « fait » et enfin « tout » (fait ou pas fait).
- chaque click sur un onglet doit provoquer le rechargement des données depuis l'api fictive
- vous devez utiliser des templates Underscore / Lodash pour afficher du HTML en JS
- vous devez respecter le format des dates françaises (jj/mm/aaaa)
- consultez les screenshots et reproduisez l'intégration HTML CSS

Pour requêter l'api fictive, vous pouvez simplement faire des requêtes ajax sur le fichier « data.js ».

Pour vous aider sur la partie JS avec Browserify, vous pouvez consulter les repo suivants :

- [https://github.com/jibundeyare/epsi-arras-js-2017-2018](https://github.com/jibundeyare/epsi-arras-js-2017-2018)
- [https://github.com/jibundeyare/epsi-lille-browserify-2017-2018](https://github.com/jibundeyare/epsi-lille-browserify-2017-2018)

## Pré-requis

- nodejs & npm ([nodejs.org](http://nodejs.org/))
- browserify [Browserify](http://browserify.org/)
- watchify [browserify/watchify: watch mode for browserify builds](https://github.com/browserify/watchify)
- browser-sync [Browsersync - Time-saving synchronised browser testing](https://www.browsersync.io/)
- ruby ([Le langage Ruby](https://www.ruby-lang.org/fr/))
- sass ([Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/))

## Install

    git clone https://github.com/jibundeyare/epsi-lille-browserify-project-2017-2018.git
    cd epsi-lille-browserify-project-2017-2018
    npm install

## CLI

Recompiler automatiquement les fichiers sass :

    sass --style compressed --watch sass:css

Recompiler automatiquement les fichiers js :

    watchify js/main.js -o js/bundle.js

Démarrer un serveur web et recharger automatiquement la page :

    browser-sync start --server . --files .

## Indices

Utiliser jquery et bootstrap avec browserify :

    var $ = global.$ = global.jQuery = require('jquery');
    var bootstrap = require('bootstrap');

Utliiser moment et la locale française avec browserify :

    var moment = require('moment');
    require('moment/locale/fr');

Importer une variable dans un template :

    var template = `<% var date = moment(data, 'YYYY-MM-DD') %>
    <%= date.format('DD/MM/YYYY') %>
    `;
    var compiled = _.template(template, {imports: {'moment': moment}});
    var html = compiled({'data': '2017-10-01'})

Supprimer la classe `active` d'un élément parent :

    item.parentNode.classList.remove('active');

Ajouter la classe `active` à un élément parent :

    item.parentNode.classList.add('active');

