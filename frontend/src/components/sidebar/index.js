import * as S from "../sidebar/styled";
import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Para acessar o pathname atual

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.ToggleButton onClick={toggleSidebar}>
        {isOpen ? "Colapsar" : "Expandir"}
      </S.ToggleButton>
      {isOpen && (
        <>
          <S.MenuItem onClick={() => handleItemClick("/two")}>
            Item 1
          </S.MenuItem>
          <S.MenuItem onClick={() => handleItemClick("/three")}>
            Item 2
          </S.MenuItem>
          <S.MenuItem onClick={() => handleItemClick("/four")}>
            Item 3
          </S.MenuItem>
        </>
      )}
    </S.SidebarContainer>
  );
}

export default SideBar;
