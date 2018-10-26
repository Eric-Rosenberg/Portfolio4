import React from 'react';
import { Link } from 'gatsby';
import { Spring } from 'react-spring';
import Theme from './Theme';

const Header = () => (
  <Theme.Consumer>
    {colors => (
      <div
        css={`
          background: ${colors.darkPrimary};
          max-width: 960;
          padding: 0.1rem 1rem;
        `}
      >
        <h1>
          <Link
            to="/"
            css={`
              color: ${colors.textPrimary};
              text-decoration: none;
              &:hover {
                color: ${colors.complimentary};
              }
            `}
          >
            <Spring config={{ duration: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {props => <span style={props}>E R I C</span>}
            </Spring>
          </Link>
        </h1>
      </div>
    )}
  </Theme.Consumer>
);

export default Header;
