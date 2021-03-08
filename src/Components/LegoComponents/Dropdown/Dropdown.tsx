import React, { useRef, useState, useEffect } from 'react';
import {
  faChevronUp, faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Arrow, Control, DropdownStyle, Item, Itens, SelectedValue,
} from './Dropdown.styles';

interface OwnProps {
    itensArray: any, prompt: string, onChange: any, value?: any
}

function Dropdown({
  itensArray, prompt, onChange, value,
} : OwnProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);
  function close(e) {
    setOpen(e && e.target === ref.current);
  }
  return (
    <DropdownStyle>
      <Control onClick={() => setOpen((prevState) => !prevState)}>
        <SelectedValue isOpen={open} ref={ref}>
          {value || prompt}
        </SelectedValue>
        <Arrow>
          { open ? (<FontAwesomeIcon icon={faChevronUp} />) : (<FontAwesomeIcon icon={faChevronDown} />)}
        </Arrow>
      </Control>
      <Itens isOpen={open} className={`options ${open ? 'open' : null}`}>
        {
          itensArray.map((item) => (
            <Item isSelected={value === item} key={item} onClick={() => { onChange(item); setOpen(false); }}>
              {item}
            </Item>
          ))
        }

      </Itens>
    </DropdownStyle>
  );
}

export default Dropdown;
