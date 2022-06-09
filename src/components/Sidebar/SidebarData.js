import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';

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
];

export default SidebarData;
