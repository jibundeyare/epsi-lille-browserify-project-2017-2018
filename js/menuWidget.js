var _ = require('lodash');

var template = `<div class="container">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a id="logoBtn" class="navbar-brand" href="/">Tâches</a>
  </div>
</div><!-- /.container -->
`;

var compiled = _.template(template);

exports.display = function(element) {
  element.innerHTML = compiled({});

  var logoBtn = document.querySelector('#logoBtn');

  logoBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
};

