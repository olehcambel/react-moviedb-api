import { Children } from 'react';
import { injectGlobal, withTheme } from 'styled-components';

const Global = ({ theme, children }) => {
  injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Space+Mono');
  body {
    margin: 0;
    padding: 0;
    font-family: Avenir, Montserrat, Arial, sans-serif;
    font-size: 14px;
    color: #666;
    letter-spacing: 0.11px;
    line-height: 21px;
    padding-bottom: 40px;
    background-color: ${theme.darkGrey};
  }

  code {
    font-family: 'Space Mono', monospace;
  }

  button {
    font-family: Avenir, Montserrat, Arial, sans-serif;
  }

  nav a {
    padding: 7px 14px;
    border-bottom: 2px solid ${theme.blue};
  }

  a,
  .link {
    border: none;
    color: ${theme.blue};
    text-decoration: none;
    position: relative;
    opacity: 0.8;
    font-weight: 300;
    letter-spacing: 0.09px;
    text-align: left;
    line-height: 21px;
    font-size: 14px;
    cursor: pointer;
    transition: color 200ms ease;

          &.no-hover {
              line-height: 1.8;
              &:hover {
                  color: ${theme.blue};
              }
              &:after {
                  display: none;
              }
          }

          span {
            position: relative;
            z-index: 10;
          }

    &.active_nav{
        color: #fff;
        height: 35px;
        top: -6px;
        &:after {
            left: 0;
            z-index: -1;
        }
        &:hover{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08);
        }
    }

    @media (pointer: coarse) {

        &.active_nav{
            top: 1px;
            background: none;
            color: ${theme.blue};
        }
    }

    @media (pointer: fine) {

     &:after {
        transition: height 200ms ease;
        content: '';
        width: 100%;
        height: 0;
        background: ${theme.blue};
        display: block;
        position: absolute;
        bottom: 0;
        z-index: 0;
        border-radius: 2px 2px 0 0;
      }

      &.active_nav, &:hover  {
        color: ${theme.primary};

              &:after {
                height: 100%;
              }
            }
          }
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }
     
      `;
  return Children.only(children);
};

export default withTheme(Global);
