import React from 'react';

// .dark-primary-color    { background: #303F9F; }
// .default-primary-color { background: #3F51B5; }
// .light-primary-color   { background: #C5CAE9; }
// .text-primary-color    { color: #FFFFFF; }
// .accent-color          { background: #4CAF50; }
// .primary-text-color    { color: #212121; }
// .secondary-text-color  { color: #757575; }
// .divider-color         { border-color: #BDBDBD; }

const theme = {
  darkPrimary: '#303F9F',
  defaultPrimary: '#3F51B5',
  lightPrimary: '#C5CAE9',
  textPrimary: '#FFFFFF',
  textSecondary: '#757575',
};

const ColorContext = React.createContext({ ...theme });

export default ColorContext;
