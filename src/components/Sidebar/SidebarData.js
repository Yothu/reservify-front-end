import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const SidebarData = [
  {
    title: 'Reserve',
    path: '/reserve',
    icon: <MdIcons.MdBorderColor />,
  },
  {
    title: 'My Reservations',
    path: '/my_reservations',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Add Hotel',
    path: '/add_hotel',
    icon: <AiIcons.AiFillFileAdd />,
  },
  {
    title: 'Delete Hotel',
    path: '/delete_hotel',
    icon: <AiIcons.AiFillDelete />,
  },
  {
    title: 'Login',
    path: '/login',
    icon: <RiIcons.RiLoginBoxLine />,
  },
  {
    title: 'Signup',
    path: '/signup',
    icon: <AiIcons.AiOutlineLogin />,
  },
  {
    title: 'Logout',
    path: '/',
    icon: <RiIcons.RiLogoutBoxLine />,
  },
];

export default SidebarData;
