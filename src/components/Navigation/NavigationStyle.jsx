import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// For custom components like "Link" call styled as a function invokation

const CommonRule = css`
  @media screen and (max-width: 568px) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;
export const CommonRuleLi = css`
  list-style: none;
  padding: 10px;
  cursor: pointer;
`;

export const Li = styled.li`
  list-style: none;
  padding: 10px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 1% 1% 0;
  background-color: #9dada3;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  ${CommonRule}
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const WebLogo = styled.li`
  background: url(https://i.ibb.co/rm2X8QP/owl.png) no-repeat center;
  background-size: 90%;
  ${CommonRuleLi}
  width: 100px;
  @media screen and (max-width: 568px) {
    height: 50px;
  }
`;
export const NavigationOption = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  ${CommonRule}
`;

export const UserName = styled.li`
  color: white;
  font-weight: bolder;
  ${CommonRuleLi}
`;

export const NavigationOptionColor = styled(Link)`
  text-decoration: none !important;
  color: #083232;
  font-weight: bolder;
  padding-top: 15px !important;
  :hover {
    color: white;
  }
`;

export const UserLogin = styled(Link)`
  background: url(https://i.ibb.co/wB25mYW/icons8-circled-user-64.png) no-repeat
    center;
  background-size: 60%;
  width: 50px;
  @media screen and (max-width: 568px) {
    height: 30px;
    margin: 5px;
  }
`;

export const UserLogout = styled.div`
  background: url(https://i.ibb.co/yYV53YH/logout.png) no-repeat center;
  background-size: 60%;
  width: 50px;
  ${CommonRuleLi}
  @media screen and (max-width: 568px) {
    height: 30px;
    margin: 5px 5px 5px 15px;
  }
`;
