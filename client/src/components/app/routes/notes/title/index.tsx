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
      <a onClick={toggleMarkDown}>{markdownState ? <Code/> : <Eye/>}</a>
      <a onClick={toggleBookmark}><Bookmark style={{fill:bookmarkState ? "var(--fg-nav)":"none"}}/></a>
      <input placeholder="search . . ."></input>
      <a onClick={toggleSearch}>{searchAllState ? <Folder/> : <File/>}</a>
    </div>
  );
}

export default Title;
