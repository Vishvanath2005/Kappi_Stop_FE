import React from 'react'
import { Route } from 'react-router'
import Menu_Management from '../../pages/menu_management/Menu_Management'
import View_Menu from '../../pages/menu_management/View_Menu'

const Menu_Route = () => {
  return (
    <>
   <Route path="/menu">
        <Route index element={<Menu_Management />} />
        <Route path="view_menu" element={<View_Menu />} />
      </Route>
    </>
  )
}

export default Menu_Route