//= require jquery
//= require jquery_ujs
//= require jquery-ui/widgets/slider
//= require bootstrap-sprockets
//= require bootstrap-datepicker
//= require selectize
//= require underscore
//= require gmaps/google
//= require moment
//= require fullcalendar
//= require algolia/v3/algoliasearch.min
//= require_tree .



$(function () {
  if ($('[data-toggle="tooltip"]').length != 0) {
    $('[data-toggle="tooltip"]').tooltip({container: 'body'})
  }
})

