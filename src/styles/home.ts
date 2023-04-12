import styled from 'styled-components';

export const Container = styled.div`
  .show-mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    .show-mobile {
      display: inline-block;
    }
  }
  min-height: 100vh;

  padding-bottom: 30px;

  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    padding: 20px;
    padding-top: 36px;
  }

  .button-color {
    font-family: 'Bowlby One', cursive;
    padding: 21px 27px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background};
    font-size: 1.8rem;
  }

  .auto {
    margin: 0 auto !important;

    display: block;
  }

  nav {
    @media (max-width: 1200px) {
      .menu {
        position: fixed;
        left: 0;
        top: 0;

        width: 70%;
        height: 100%;

        z-index: 11;

        transform: translateX(-100%);
        transition: all 0.5s ease;

        background-color: ${({ theme }) => theme.colors.background};

        border: 1px solid ${({ theme }) => theme.colors.simple_text};

        border-left: none;
        border-bottom: none;

        ul {
          display: flex;
          flex-direction: column;
        }

        .close {
          position: absolute;

          top: 11px;
          right: 10px;
        }
      }

      .menu.toggle {
        transform: translateX(0);
        transition: all 0.5s ease;
      }
    }
    font-family: 'Bowlby One', cursive;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;

    margin-bottom: 7.4rem;

    .logo {
      font-size: 3rem;
    }

    ul {
      display: flex;
      align-items: center;

      gap: 40px;

      font-size: 1.8rem;

      li {
        padding: 21px 27px;

        cursor: pointer;
      }
    }
  }

  h1 {
    text-align: center;
    color: white;
    font-family: 'Bowlby One', cursive !important;

    font-size: 10rem;
    text-transform: uppercase;
    line-height: 95.2px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 5rem;
      line-height: 50.2px;
    }

    h2 {
      font-size: 5rem !important;
      line-height: 50.2px !important;
    }
  }

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Bowlby One', cursive !important;

    font-size: 7rem;
    text-transform: uppercase;
    line-height: 95.2px;

    margin: 92px 0;
  }

  h3 {
    font-family: 'Bowlby One' !important;
    font-style: normal;
    font-weight: 400;
    font-size: 4rem;
    line-height: 101.9%;
    /* or 71px */

    text-align: center;
    text-transform: uppercase;

    color: #e9e3dc;

    margin-top: 100px;

    margin-bottom: 33px;
  }

  background-color: ${({ theme }) => theme.colors.background};

  .img-banner {
    margin-top: -30px;
  }

  @media (max-width: 1200px) {
    .banner {
      margin-top: 40px;
      flex-direction: column;
      padding: 30px !important;

      .left,
      .right {
        width: 100% !important;
      }

      .title {
        font-size: 3rem !important;
      }
    }
  }

  .banner {
    background-color: ${({ theme }) => theme.colors.primary};

    width: 100%;
    min-height: 370px;

    border: 4px solid #1e1e1e;
    border-radius: 30px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 28px;

    padding: 98px;

    .title {
      font-family: 'Bowlby One', cursive !important;

      line-height: 88.9%;
      /* or 62px */

      letter-spacing: -0.02em;
      text-transform: uppercase;

      font-size: 5.2rem;
    }
    .subtitle {
      font-family: 'Inter', sans-serif !important;

      font-weight: 600;
      font-size: 2.4rem;

      line-height: 139.9%;
      /* or 34px */

      letter-spacing: -0.02em;
    }

    .left {
      /* background-color: green; */
      height: 100%;
      width: 50%;
    }

    .right {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;

      justify-content: flex-start;

      font-size: 1.8rem;

      /* background-color: red; */

      button {
        font-family: 'Bowlby One';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 96.9%;
        /* or 17px */

        text-align: center;
        text-transform: uppercase;

        color: #1e1e1e;

        background: #e9e3dc;
        border: 4px solid #1e1e1e;
        /* DropShadow */

        box-shadow: 8px 8px 0px #000000;

        width: 176px;
        height: 60px;

        padding: 10px 0;

        margin-top: 3.4rem;
      }
    }
  }

  @media (max-width: 1200px) {
    .orders {
      flex-direction: column;
    }
  }

  .orders {
    display: flex;

    width: 100%;

    gap: 40px;

    margin-top: 64px;
  }

  footer {
    @media (max-width: 1200px) {
      ul {
        flex-direction: column;

        align-items: center;

        text-align: center;
      }

      .menu-footer {
        gap: 20px;
      }

      .footer {
        margin: 0 !important;
        margin-top: 20px !important;
      }
    }

    background-color: ${({ theme }) => theme.colors.secondary};

    width: 100%;

    padding: 76px;
    padding-bottom: 30px;

    margin-top: 136px;

    border-radius: 30px;

    .footer {
      display: flex;
      justify-content: space-between;
      width: 100%;

      font-family: 'Inter', sans-serif !important;
      font-style: normal;
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 164.4%;
      /* identical to box height, or 23px */

      color: #1e1e1e;

      margin: 0 33px;
      margin-top: 50px;
    }

    .input-container {
      margin-top: 20px;

      border: 1px solid #1e1e1e;
      border-radius: 10px;

      position: relative;

      height: 60px;

      input {
        background-color: transparent;

        width: 100%;
        height: 100%;

        padding-left: 16px;
        padding-right: 100px;

        font-family: 'Bowlby One';
      }

      button {
        position: absolute;

        right: 10px;
        top: 20px;

        font-family: 'Bowlby One';

        background-color: transparent;

        font-size: 1.8rem;
        line-height: 96.9%;
        /* or 17px */

        text-transform: uppercase;

        color: ${({ theme }) => theme.colors.background};
      }
    }

    ul {
      display: flex;
      color: ${({ theme }) => theme.colors.background};

      justify-content: space-evenly;

      li {
        ul {
          flex-direction: column;
          font-family: 'Inter', sans-serif !important;
          font-size: 1.8rem;
          line-height: 164.4%;
        }
      }
    }

    .footer-title {
      font-size: 1.8rem;
    }

    .footer-title,
    .footer-logo {
      font-family: 'Bowlby One';
    }

    .footer-logo {
      font-size: 3rem;

      line-height: 96.9%;
      /* or 29px */

      text-transform: uppercase;
    }
  }
`;

export const OrderContainer = styled.div`
  width: 100%;
  height: 753px;

  @media (max-width: 1200px) {
    height: 400px;
  }

  position: relative;

  img {
    position: absolute;
    height: 100%;
  }

  button {
    position: absolute;

    bottom: 23px;
    left: 23px;

    background: #1e1e1e;
    border-radius: 30px;

    text-align: left;

    padding: 4rem;

    max-width: 38.6rem;

    .title {
      font-family: 'Bowlby One';

      font-size: 2rem;

      line-height: 96.9%;
      /* or 29px */

      text-transform: uppercase;

      color: #e9e3dc;

      margin-bottom: 18px !important;
    }

    span {
      font-family: 'Bowlby One';

      font-size: 1.4rem;
      line-height: 96.9%;
      /* or 19px */

      text-transform: uppercase;

      color: #b3a0cd;
    }
  }
`;
