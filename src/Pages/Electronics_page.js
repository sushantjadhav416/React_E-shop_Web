import React from 'react'
import Header_top from '../Mycomponents/Header_top'
import Logo from '../Mycomponents/Logo'
import Header_bottom from '../Mycomponents/Header_bottom'
import Banner_bottom from '../Mycomponents/Banner_bottom'
import Fashion from '../Mycomponents/Fashion'
import Electronics from '../Mycomponents/Electronics'
import Glocery from '../Mycomponents/Glocery'
import Footer from '../Mycomponents/Footer'


const Electronics_page = () => {
  return (
    <div class="banner_bg_main_E">
      <Header_top></Header_top>
      <Logo></Logo> 
      <Header_bottom></Header_bottom>
      <Banner_bottom></Banner_bottom>
      <Electronics></Electronics>
       <Footer></Footer>
    </div>
  )
}

export default Electronics_page
