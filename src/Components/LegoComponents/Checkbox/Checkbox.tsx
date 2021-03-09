import React, {
} from 'react';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CheckboxStyle, Border, Indicator,
} from './Checkbox.styles';

interface OwnProps {
    checked: any,
    onChange: any,
}

const Checkbox = ({
  checked, onChange,
} : OwnProps) => (
  <CheckboxStyle isChecked={checked}>
    <Border onClick={() => onChange(!checked)}>
      { checked && (
      <Indicator>
        <FontAwesomeIcon icon={faCheckCircle} />
      </Indicator>
      )}
    </Border>
  </CheckboxStyle>
);

export default Checkbox;
