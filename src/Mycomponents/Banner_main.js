import React from 'react'
import Header_top from './Header_top'
import Logo from './Logo'
import Header_bottom from './Header_bottom'
import Banner_bottom from './Banner_bottom'
import Fashion from './Fashion'
import Electronics from './Electronics'
import Glocery from './Glocery'
import Footer from './Footer'


const Banner_main = () => 
{
  return (
    <div class="banner_bg_main_h">
      <Header_top></Header_top>
      <Logo></Logo>
      <Header_bottom></Header_bottom>
      <Banner_bottom></Banner_bottom>
      <Fashion></Fashion>
      <Electronics></Electronics>
      <Glocery></Glocery>
      <Footer></Footer>
    </div>
  )
}

export default Banner_main
