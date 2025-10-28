import React from 'react';

const stories = ['Ava','Liam','Noah','Emma','Olivia','Sophia'];

export default function StoriesBar(){
  return (
    <div className="card">
      <h4>Stories</h4>
      <div className="stories">
        {stories.map(s => <div key={s} className="story">{s[0]}</div>)}
      </div>
    </div>
  );
}
