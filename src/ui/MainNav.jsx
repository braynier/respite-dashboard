import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";
import styled from "styled-components";
import { useState } from "react";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 1180px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  position: fixed;
  top: 6.1rem;
  left: 0;
  width: 30vw;
  height: 50vh;
  z-index: 999;
  border: 1px solid var(--color-grey-200);
  border-top: none;
  background-color: var(--color-grey-50);
  padding: 3.2rem 2.4rem;

  & ul {
    display: block;
  }

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

function MainNav() {
  const [isOpen, setIsopen] = useState(false);

  function handleToggle() {
    setIsopen(!isOpen);
  }

  function handleClose() {
    console.log("Clicked the nav link");
    setIsopen(false);
  }

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays /> Bookings
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern /> Cabins
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers /> Users
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth /> Settings
          </StyledNavLink>
        </li>
      </NavList>

      <HamburgerButton onClick={handleToggle}>
        {isOpen ? <HiXMark /> : <HiBars3 />}
      </HamburgerButton>
      {isOpen && (
        <HamburgerMenu>
          <NavList>
            <li>
              <StyledNavLink to="/dashboard" onClick={handleClose}>
                <HiOutlineHome />
                <span>Home</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/bookings" onClick={handleClose}>
                <HiOutlineCalendarDays /> Bookings
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cabins" onClick={handleClose}>
                <HiOutlineHomeModern /> Cabins
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/users" onClick={handleClose}>
                <HiOutlineUsers /> Users
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/settings" onClick={handleClose}>
                <HiOutlineCog6Tooth /> Settings
              </StyledNavLink>
            </li>
          </NavList>
        </HamburgerMenu>
      )}
    </nav>
  );
}

export default MainNav;
