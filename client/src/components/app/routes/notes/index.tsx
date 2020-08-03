import React, { useState } from 'react';
import './index.scss';

import Title from './title';
import NoteMenu from './notemenu';

const Notes = () => {
  return (
    <div className="routes-notes">
      <Title></Title>

      <div className="notes-body">
        <NoteMenu></NoteMenu>

        <div className="notes-content">
        </div>
      </div>
    </div>
  );
}

export default Notes;
