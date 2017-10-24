var $ = global.$ = global.jQuery = require('jquery');
var bootstrap = require('bootstrap');
var menuWidget = require('./menuWidget.js');
var tabsWidget = require('./tabsWidget.js');
var allTasksWidget = require('./allTasksWidget.js');
var doneTasksWidget = require('./doneTasksWidget.js');
var todoTasksWidget = require('./todoTasksWidget.js');

$(document).ready(function() {
  console.log('ready');

  var nav = document.querySelector('nav');
  var tabs = document.querySelector('#tabs');
  var tasks = document.querySelector('#tasks');

  menuWidget.display(nav);
  tabsWidget.display(tabs);
  todoTasksWidget.display(tasks);

  var allBtn = document.querySelector('#allBtn');
  var doneBtn = document.querySelector('#doneBtn');
  var todoBtn = document.querySelector('#todoBtn');

  allBtn.addEventListener('click', function(event) {
    allTasksWidget.display(tasks);
  });

  doneBtn.addEventListener('click', function(event) {
    doneTasksWidget.display(tasks);
  });

  todoBtn.addEventListener('click', function(event) {
    todoTasksWidget.display(tasks);
  });
});

