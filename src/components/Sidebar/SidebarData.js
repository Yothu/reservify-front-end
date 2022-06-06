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
    path: '/',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Add Hotel',
    path: '/',
    icon: <AiIcons.AiFillFileAdd />,
  },
  {
    title: 'Delete Hotel',
    path: '/',
    icon: <AiIcons.AiFillDelete />,
  },
  {
    title: 'Login',
    path: '/',
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
