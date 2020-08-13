import React, { useState } from 'react';
import {Code, Eye, Bookmark, File, Folder} from 'react-feather';
import './index.scss';

const Title = () => {
  const [markdownState, setMarkdownState] = useState(true);
  const [searchAllState, setSearchAllState] = useState(false);
  const [bookmarkState, setBookmarkState] = useState(false);

  const toggleBookmark = () => {
    setBookmarkState(!bookmarkState);
  }

  const toggleSearch = () => {
    setSearchAllState(!searchAllState);
  }

  const toggleMarkDown = () => {
    setMarkdownState(!markdownState);
  }

  return (
    <div className="notes-title">
      <h3>NeverNote</h3>
      <div className="spacer"></div>
      <div className="icon" onClick={toggleMarkDown}>{markdownState ? <Code/> : <Eye/>}</div>
      <div className="icon" onClick={toggleBookmark}><Bookmark style={{fill:bookmarkState ? "var(--fg-nav)":"none"}}/></div>
      <input placeholder="search . . ."></input>
      <div className="icon" onClick={toggleSearch}>{searchAllState ? <Folder/> : <File/>}</div>
    </div>
  );
}

export default Title;
