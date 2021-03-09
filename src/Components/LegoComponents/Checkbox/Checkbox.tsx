import React, {
} from 'react';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CheckboxContainer, Border, Indicator,
} from './Checkbox.styles';

interface OwnProps {
    checked: any,
    onChange: any,
}

const Checkbox = ({
  checked, onChange,
} : OwnProps) => (
  <CheckboxContainer>
    <Border onClick={() => onChange(!checked)}>
      { checked && (
      <Indicator isChecked={checked}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </Indicator>
      )}
    </Border>
  </CheckboxContainer>
);

export default Checkbox;
