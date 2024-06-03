import React, { useState } from 'react';
import { styled } from 'styled-components';
import Header from './header/AppBar';
import Sidebar from './sidebar/SideDrawer';
import Main from './main/Main';
import Footer from './footer/Footer';
import SearchModal from '../modals/SearchModal';

const ContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
`;

const Layout = () => {
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleDrawer = () => {
    setOpen((open) => !open);
  };

  const handleModal = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <div>
      <Header open={open} setIsOpen={handleDrawer}/>
      <ContentWrapper>
        <Sidebar
          open={open}
          setIsOpen={handleDrawer}
          setOpenModal={handleModal} 
        />
        <Main />
      </ContentWrapper>
      <Footer />
      <SearchModal open={openModal} setOpenModal={handleModal}/>
    </div>
  )
};

export default Layout;