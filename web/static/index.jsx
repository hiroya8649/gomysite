import React from 'react';
import ReactDOM from 'react-dom';
import Resume from '@/resume';
import _Bootstrap from 'bootstrap';
import _BootstrapCSS from 'bootstrap/scss/bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBirthdayCake, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faBirthdayCake, faPhone, faEnvelope)

ReactDOM.render(
  <Resume />,
  document.getElementById('root')
);
