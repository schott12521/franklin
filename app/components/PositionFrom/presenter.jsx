import React from 'react';

import InputNumber from '../InputNumber';

const PositionFrom = (props) => (
  <InputNumber
    value={props.value}
    onChange={props.onChange}
    labelText={'Starting position'}
  />
);

PositionFrom.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default PositionFrom;
