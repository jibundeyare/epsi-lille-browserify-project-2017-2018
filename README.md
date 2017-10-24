# browserify project

## pré-requis

- nodejs & npm ([nodejs.org](http://nodejs.org/))
- browserify [Browserify](http://browserify.org/)
- watchify [browserify/watchify: watch mode for browserify builds](https://github.com/browserify/watchify)
- browser-sync [Browsersync - Time-saving synchronised browser testing](https://www.browsersync.io/)
- ruby ([Le langage Ruby](https://www.ruby-lang.org/fr/))
- sass ([Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/))

## install

    git clone https://github.com/jibundeyare/epsi-lille-browserify-project-2017-2018.git
    cd epsi-lille-browserify-project-2017-2018
    npm install

## cli

Recompiler automatiquement les fichiers sass :

    sass --style compressed --watch sass:css

Recompiler automatiquement les fichiers js :

    watchify js/main.js -o js/bundle.js

Démarrer un serveur web et recharger automatiquement la page :

    browser-sync start --server . --files .

## hints

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

