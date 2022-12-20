import React from "react";

function Footer() {
  let currentYear = new Date();
  let year = currentYear.getFullYear();

  return (
    <footer>
<p>Copyright © {year}</p> 
    </footer>
        
    
  );
}

export default Footer;