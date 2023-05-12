import React, { useState } from 'react';

function ExpandableText(props: any) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  const maxHeight = expanded ? 'none' : '250px';

  return (
    <div>
      <div style={{ maxHeight: maxHeight, overflow: 'hidden' }}>
        <p>{props.text}</p>
      </div>
      <button onClick={toggleExpanded}>
        {expanded ? 'See less' : 'See more'}
      </button>
    </div>
  );
}

export default ExpandableText;
