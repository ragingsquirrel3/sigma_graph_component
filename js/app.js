import '../css/app.scss';
import $ from "jquery";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'waypoints';
import 'scrollTo';

import React from 'react';
import { render } from 'react-dom';
import ExampleApp from './ExampleApp';

const TARGET_EL_ID = 'j-target';

$(function() {
  /**
   * JS STARTS
  */
  render(
    <ExampleApp />,
    document.getElementById(TARGET_EL_ID)
  );
  /**
   * EXAMPLE JS ENDS
  */
  $('[id^=scrollTo]').click(function() {
    var id = $(this).attr('id').slice(9);
    $(window).scrollTo($('#' + id), 1000, { offset: { top: -51, left: 0 } });
  });

  $('#marketing').waypoint(function() {
    $('.img-circle').addClass('animated zoomIn');
  }, {
    offset: '50%',
    triggerOnce: true
  });

  $('.featurette').waypoint(function() {
    $('#' + this.element.id + ' .featurette-image').addClass('animated pulse');
  }, {
    offset: '50%',
    triggerOnce: true
  });
});

