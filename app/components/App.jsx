import React, { PropTypes } from 'react';

import Header from './Header';
import Visualizer from './Visualizer';
import Toolbar from './Toolbar';
import Footer from './Footer';

const { string } = PropTypes;


const someNucleotides = 'AAACGAAAACT'.split('');

const App = (props) =>
  <div className="layout">
    <Header />
    <div className="content">
      <Visualizer
        nucleotides={someNucleotides}
      />
      <Toolbar />
    </div>
    <Footer version={props.version} />
  </div>
  ;

App.propTypes = {
  version: string.isRequired,
};

export default App;