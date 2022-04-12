import React from 'react';
import ContentLoader from "react-content-loader"


export const PostLoadingBlock = (props) => {
  return (
    <section className="fullpost fullpost__loader">
    <ContentLoader 
    className="fullpost__loader-block"
    speed={3}
    width={587}
    height={787}
    viewBox="0 0 587 787"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="32" rx="6" ry="6" width="335" height="40" /> 
    <rect x="3" y="32" rx="6" ry="6" width="335" height="40" /> 
    <rect x="2" y="56" rx="6" ry="6" width="145" height="20" /> 
    <rect x="3" y="84" rx="6" ry="6" width="441" height="40" /> 
    <rect x="3" y="181" rx="6" ry="6" width="330" height="18" /> 
    <rect x="3" y="149" rx="6" ry="6" width="584" height="18" /> 
    <rect x="0" y="365" rx="6" ry="6" width="584" height="18" /> 
    <rect x="0" y="397" rx="6" ry="6" width="555" height="18" /> 
    <rect x="0" y="429" rx="6" ry="6" width="508" height="18" /> 
    <rect x="0" y="461" rx="6" ry="6" width="584" height="18" /> 
    <rect x="0" y="519" rx="6" ry="6" width="584" height="18" /> 
    <rect x="0" y="551" rx="6" ry="6" width="555" height="18" /> 
    <rect x="0" y="583" rx="6" ry="6" width="508" height="18" /> 
    <rect x="0" y="615" rx="6" ry="6" width="584" height="18" /> 
    <rect x="0" y="673" rx="6" ry="6" width="584" height="18" /> 
    <rect x="0" y="705" rx="6" ry="6" width="555" height="18" /> 
    <rect x="0" y="737" rx="6" ry="6" width="508" height="18" /> 
    <rect x="0" y="769" rx="6" ry="6" width="584" height="18" />
  </ContentLoader>
  </section>
  )
}
