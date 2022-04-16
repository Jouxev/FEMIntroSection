import { ReactComponent as Logo } from "../Assets/logo.svg";
import { ReactComponent as ArrowUp } from "../Assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../Assets/icon-arrow-down.svg";
import { ReactComponent as Todo } from "../Assets/icon-todo.svg";
import { ReactComponent as Calendar } from "../Assets/icon-calendar.svg";
import { ReactComponent as Remnider } from "../Assets/icon-reminders.svg";
import { ReactComponent as Planning } from "../Assets/icon-planning.svg";

import { ReactComponent as Menu } from "../Assets/icon-menu.svg";
import { ReactComponent as CloseMenu } from "../Assets/icon-close-menu.svg";

import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: var(--MediumGray);
  font-weight: 500;
`;
const NavigationMenu = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mobile({
    display: "none",
  })};
`;

const Item = styled.div`
  margin: 0px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  &:hover {
    color: var(--AlmostBlack);
  }
  ${(props) => props.mobile && " display: block; margin: 20px 0px;"}
`;
const DropDownList = styled.div`
  color: var(--MediumGray);
  background-color: white;
  position: absolute;
  border-radius: 5px;
  bottom: -120px;
  cursor: default;
  right: 0px;
  padding: 10px;
  -webkit-box-shadow: -2px 4px 12px 2px rgba(20, 20, 20, 0.3);
  box-shadow: -2px 4px 12px 2px rgba(20, 20, 20, 0.3);
  ${(props) =>
    props.mobile &&
    "position: inherit; bottom: 0; margin-left: 20px; box-shadow: none;"}
`;
const DropDownItem = styled.div`
  cursor: pointer;
  margin: 5px 0px;
  display: flex;
  width: 100%;
  &:hover {
    color: var(--AlmostBlack);
  }
  ${mobile({
    margin: "10px 0px",
  })}
`;

const Auth = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    display: "none",
  })}
`;
const Button = styled.button`
  color: var(--MediumGray);
  padding: 10px 20px;
  margin: 0px 5px;
  border-radius: 10px;
  border: 2px solid var(--MediumGray);
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--AlmostBlack);
    color: var(--AlmostBlack);
  }
`;
const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  z-index: 9 !important;
  ${mobile({
    display: "block",
  })}
`;
const SideMenu = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: visibilty 0.2 ease all;
  background: rgba(0, 0, 0, 0.3);
  ${mobile({
    visibility: "visible",
  })}
`;
const SideMenuContent = styled.div`
  width: 65%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 0px 0px 20px;
  top: 0;
  right: 0;
  background: var(--AlmostWhite);
`;
const MenuNavigationMobile = styled.div`
  display: none;
  ${mobile({
    display: " block",
  })}
`;

export const Navbar = () => {
  const [CarrerOpened, setCarrerOpened] = useState(false);
  const [CompanyOpened, setCompanyOpened] = useState(false);

  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <Container>
      <Logo />
      <NavigationMenu>
        <Item dropdown onClick={() => setCarrerOpened(!CarrerOpened)}>
          Features
          {CarrerOpened ? (
            <>
              <ArrowUp />
              <DropDownList onClick={(e) => e.stopPropagation()}>
                <DropDownItem>
                  <Todo style={{ marginRight: "10px" }} /> Todo List
                </DropDownItem>
                <DropDownItem>
                  <Calendar style={{ marginRight: "10px" }} /> Calendar
                </DropDownItem>
                <DropDownItem>
                  <Remnider style={{ marginRight: "10px" }} /> Reminders
                </DropDownItem>
                <DropDownItem>
                  <Planning style={{ marginRight: "10px" }} /> Planning
                </DropDownItem>
              </DropDownList>
            </>
          ) : (
            <ArrowDown />
          )}
        </Item>
        <Item dropdown onClick={() => setCompanyOpened(!CompanyOpened)}>
          Company
          {CompanyOpened ? (
            <>
              <ArrowUp />
              <DropDownList onClick={(e) => e.stopPropagation()}>
                <DropDownItem> History</DropDownItem>
                <DropDownItem> Our team </DropDownItem>
                <DropDownItem> Blog</DropDownItem>
              </DropDownList>
            </>
          ) : (
            <ArrowDown />
          )}
        </Item>
        <Item> Carrers </Item>
        <Item> About </Item>
      </NavigationMenu>
      <Auth>
        <Item>Login</Item>
        <Button> Register</Button>
      </Auth>
      <Hamburger onClick={() => setmenuOpened(!menuOpened)}>
        {menuOpened ? <CloseMenu /> : <Menu />}
      </Hamburger>
      {menuOpened && (
        <SideMenu>
          <SideMenuContent>
            <MenuNavigationMobile>
              <Item
                mobile
                dropdown
                onClick={() => setCarrerOpened(!CarrerOpened)}
              >
                Features
                {CarrerOpened ? (
                  <>
                    <ArrowUp />
                    <DropDownList mobile onClick={(e) => e.stopPropagation()}>
                      <DropDownItem mobile>
                        <Todo style={{ marginRight: "10px" }} /> Todo List
                      </DropDownItem>
                      <DropDownItem mobile>
                        <Calendar style={{ marginRight: "10px" }} /> Calendar
                      </DropDownItem>
                      <DropDownItem mobile>
                        <Remnider style={{ marginRight: "10px" }} /> Reminders
                      </DropDownItem>
                      <DropDownItem mobile>
                        <Planning style={{ marginRight: "10px" }} /> Planning
                      </DropDownItem>
                    </DropDownList>
                  </>
                ) : (
                  <ArrowDown />
                )}
              </Item>
              <Item
                dropdown
                mobile
                onClick={() => setCompanyOpened(!CompanyOpened)}
              >
                Company
                {CompanyOpened ? (
                  <>
                    <ArrowUp />
                    <DropDownList mobile onClick={(e) => e.stopPropagation()}>
                      <DropDownItem mobile> History</DropDownItem>
                      <DropDownItem mobile> Our team </DropDownItem>
                      <DropDownItem mobile> Blog</DropDownItem>
                    </DropDownList>
                  </>
                ) : (
                  <ArrowDown />
                )}
              </Item>
              <Item mobile> Carrers </Item>
              <Item mobile> About </Item>
            </MenuNavigationMobile>
          </SideMenuContent>
        </SideMenu>
      )}
    </Container>
  );
};
