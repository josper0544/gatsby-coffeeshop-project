import React from 'react';
import BackgroundImage from "gatsby-background-image";

// BackgroundSection component is a wrapper round the BackgroundImage component with props passed down
export default function BackgroundSection({
  img,
  styleClass,
  title,
  children
}) {
  return( <BackgroundImage className = {styleClass} fluid = {img}>
    <h1 className = "title text-white text-uppercase text-center display-4 font-weight-bold">
      {title}
      {/* {children} could also be inserted to add to the title */}
    </h1>
  </BackgroundImage>
  );
}
 
// setup defaults for the BackgroundSection
BackgroundSection.defaultProps = {
 title:"default title",
 styleClass:"default-background"
    
}
  

    
  

