var _ = require('lodash');
var axios = require('axios');
var moment = require('moment');
require('moment/locale/fr');
var settings = require('./settings.js');

var data = [];
var template = `<div class="table-responsive">
  <table class="table table-bordered table-hover table-striped table-condensed">
    <tr>
      <th>id</th>
      <th>tâche</th>
      <th>description</th>
      <th>date</th>
      <th>heure</th>
      <th>état</th>
    </tr>
    <% data.forEach(function(item, index, list) { %>
      <% if (item.status) { %>
        <% var date = moment(item.date, 'YYYY-MM-DD') %>
        <% var time = moment(item.time, 'HH:mm') %>
        <tr>
          <td><%= item.id %></td>
          <td><%= item.name %></td>
          <td><%= item.description %></td>
          <td><% if (date.isValid()) { %><%= date.format('DD/MM/YYYY') %><% } %></td>
          <td><% if (time.isValid()) { %><%= time.format('HH:mm') %><% } %></td>
          <td><% if (item.status) { %>fait<% } else {%>à faire<% } %></td>
        </tr>
      <% } %>
    <% }); %>
  </table>
</div>
`;

var compiled = _.template(template, {imports: {'moment': moment}});

exports.display = function(element) {
  axios.get(settings.tasks)
    .then(function (response) {
      console.log('load tasks');
      element.innerHTML = compiled({'data': response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
};

