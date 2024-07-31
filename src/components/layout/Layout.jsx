import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Header from './header/AppBar';
import Sidebar from './sidebar/SideDrawer';
import Main from './main/Main';
// import Footer from './footer/Footer';
import { getAllCases } from '../../api/cases';
import SearchModal from '../modals/SearchModal';

const ContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
`;

const Layout = () => {
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const result = await getAllCases();
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCases(); // Call the async function
  }, []); // Empty dependency array means this effect runs once on mount

  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleDrawer = () => {
    setOpen((newOpen) => !newOpen);
  };

  const handleModal = () => {
    setOpenModal((newOpenModal) => !newOpenModal);
  };

  return (
    <div>
      <Header open={open} setIsOpen={handleDrawer} />
      <ContentWrapper>
        <Sidebar open={open} setIsOpen={handleDrawer} setOpenModal={handleModal} />
        <Main />
      </ContentWrapper>
      {/* <Footer /> */}
      <SearchModal open={openModal} setOpenModal={handleModal} />
    </div>
  );
}

export default Layout;
