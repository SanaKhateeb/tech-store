import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const {links, sidebarOpen, handleSidebar} = value;
        return (
          <SideWrapper>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link to={link.path} className="sidebar-link" onClick={handleSidebar}>{link.text}</Link>
                  </li>
                )
              })}
            </ul>
          </SideWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const SideWrapper = styled.nav`
`