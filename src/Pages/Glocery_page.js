import React from 'react'
import Header_top from '../Mycomponents/Header_top'
import Logo from '../Mycomponents/Logo'
import Header_bottom from '../Mycomponents/Header_bottom'
import Banner_bottom from '../Mycomponents/Banner_bottom'

import Glocery from '../Mycomponents/Glocery'
import Footer from '../Mycomponents/Footer'

const Glocery_page= () => {
  return (
    <div className="banner_bg_main_Glo">
      <Header_top></Header_top>
      <Logo></Logo>
      <Header_bottom></Header_bottom>
      <Banner_bottom></Banner_bottom>
      <Glocery></Glocery>
      <Footer></Footer>
    </div>
  )
}

export default Glocery_page
