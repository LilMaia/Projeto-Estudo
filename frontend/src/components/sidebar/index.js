import * as S from "../sidebar/styled";
import React, { useState } from 'react';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); //Defini o estado de isOpen como o oposto do estado atual
  };

  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.ToggleButton onClick={toggleSidebar}>
        {isOpen ? 'Colapsar' : 'Expandir'}
      </S.ToggleButton>
      {isOpen && (
        <>
          <S.MenuItem>Item 1</S.MenuItem>
          <S.MenuItem>Item 2</S.MenuItem>
          <S.MenuItem>Item 3</S.MenuItem>
        </>
      )}
    </S.SidebarContainer>
  );
}

export default SideBar;
