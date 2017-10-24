var _ = require('lodash');

var template = `<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a id="todoBtn" href="#">À faire</a></li>
  <li role="presentation"><a id="doneBtn" href="#">Fait</a></li>
  <li role="presentation"><a id="allBtn" href="#">Toutes</a></li>
</ul>
`;

var compiled = _.template(template);

exports.display = function(element) {
  element.innerHTML = compiled({});

  var btns = document.querySelectorAll('.nav-tabs > li > a');

  btns.forEach(function(item, index, list) {
    item.addEventListener('click', function(event) {
      event.preventDefault();

      // remove .active from all buttons
      list.forEach(function(item, index, list) {
        item.parentNode.classList.remove('active');
      });

      // add .active to current clicked button
      item.parentNode.classList.add('active');
    });
  });
};

