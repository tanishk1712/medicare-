import React from 'react';
import Section1 from './Section1.js'
import Section2 from './Section2.js'
import Section4 from './Section4.js'
import Section5 from './Section5.js'
import Section6 from './Section6.js'
import Section7 from './Section7.js'
import Section8 from './Section8.js'



const Layout = ({ children }) => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7/>
      <Section8/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
