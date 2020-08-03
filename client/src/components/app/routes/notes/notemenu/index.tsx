import React, { useState } from 'react';
import {ArrowLeft, Folder, FileText} from 'react-feather';
import './index.scss';

const NoteMenu = () => {
  return (
    <ul className="notes-menu">
      <li className="menu-item-title">
        <ArrowLeft/>
        <a>Notes</a>
      </li>

      <li className="menu-item">
        <Folder/>
        <a>Note Folder 1</a>
      </li>

      <li className="menu-item">
        <FileText/>
        <a>Note File 1</a>
      </li>

      <li className="menu-item">
        <FileText/>
        <a>Note File 2</a>
      </li>
    </ul>
  );
}

export default NoteMenu;
