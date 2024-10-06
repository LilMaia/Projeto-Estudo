import styled from "styled-components";

export const AppBar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: static;
  background-color: white;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const WelcomeText = styled.div`
  text-align: left;
  font-size: 24px;
  font: 24px "Texta", sans-serif;
  padding: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PercentageIcon = styled.div`
  background-image: url("https://cdn-icons-png.flaticon.com/512/1828/1828919.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  align-self: center;
  margin-right: 20px;
`;

export const Icon1 = styled.div`
  background-image: url("/image.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  align-self: center;
  margin-right: 20px;
`;

export const Icon2 = styled.div`
  background-image: url("https://cdn-icons-png.flaticon.com/512/1828/1828919.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  align-self: center;
  margin-right: 20px;
`;

export const UserText = styled.div`
  text-align: left;
  font-size: 24px;
  font: 24px "Texta", sans-serif;
  padding: 20px;
`;
