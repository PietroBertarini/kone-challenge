import React, { useState } from 'react';
import { ImportButton, Logo, Navbar } from './Home.styles';
import Modal from '../../LegoComponent/Modal/Modal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar>
      <Logo>My Team</Logo>
      <ImportButton onClick={() => setIsOpen(true)}>Import Team</ImportButton>
      <Modal open={isOpen} />
    </Navbar>
  );
};

export default Home;
