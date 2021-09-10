//Navigation Bar

import React from 'react';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <span></span>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <svg className="buttons" xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" /></svg>
      </button>
    </nav>
  );
};

export default Nav;