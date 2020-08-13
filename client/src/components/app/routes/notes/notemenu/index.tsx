import React, { useState } from 'react';
import {ArrowLeft, Folder, FileText, Home} from 'react-feather';
import './index.scss';

interface FolderFile {
  name: string;
  children: FolderFile[] | null;
  data: string | null;
  
}

const fileStructure: FolderFile[] = [
  {
    name: 'folder 1',
    children: [
      {
        name: 'filename 1',
        children: null,
        data: 'id'
      },{
        name: 'filename 2',
        children: null,
        data: 'id'
      },{
        name: 'filename 3',
        children: null,
        data: 'id'
      },
    ],
    data: null
  },{
    name: 'folder 2',
    children: [
      {
        name: 'folder 1',
        children: [
          {
            name: 'filename 1',
            children: null,
            data: 'id'
          },{
            name: 'filename 2',
            children: null,
            data: 'id'
          }
        ],
        data: null
      },{
        name: 'filename 1',
        children: null,
        data: 'id'
      },{
        name: 'filename 2',
        children: null,
        data: 'id'
      }
    ],
    data: null
  },{
    name: 'file 1',
    children: null,
    data: 'id'
  },
];

const NoteMenu = () => {
  const [dirState, setDirState] = useState([0]);

  let currentStucture = fileStructure;
  let currentDirectory = '';

  for(let i = 1; i < dirState.length; i++){
    if(currentStucture[dirState[i]].children){
      currentDirectory = currentStucture[dirState[i]].name;
      currentStucture = currentStucture[dirState[i]].children as FolderFile[];
    }
  }

  const folderFiles = currentStucture.map((item, index) => (
    <li className="menu-item" key={index} onClick={() => item.children ? setDirState([...dirState, index]) : setDirState(dirState)}>
      {item.children ? <Folder/> : <FileText/>}
      {item.name}
    </li>
  ));

  const itemTitle = (
    <li onClick={() => currentDirectory ? setDirState(dirState.slice(0, dirState.length-1)) : setDirState(dirState)} className="menu-item-title">
      {currentDirectory ? <ArrowLeft/> : <Home/>}
      {currentDirectory ? currentDirectory : 'Notes'}
    </li>
  );

  return (
    <ul className="notes-menu">
      {itemTitle}
      
      {folderFiles}
    </ul>
  );
}

export default NoteMenu;
