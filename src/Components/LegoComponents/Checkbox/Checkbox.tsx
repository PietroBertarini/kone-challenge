import React, {
} from 'react';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CheckboxStyle, Border, Icon,
} from './Checkbox.styles';

interface OwnProps {
    checked: any,
    onChange: any,
}

const Checkbox = ({ checked, onChange } : OwnProps) => (
  <CheckboxStyle isChecked={checked}>
    <Border onClick={() => onChange(!checked)}>
      { checked && (
      <Icon>
        <FontAwesomeIcon icon={faCheckCircle} />
      </Icon>
      )}
    </Border>
  </CheckboxStyle>
);

export default Checkbox;
