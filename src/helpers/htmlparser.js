import React from 'react';

export default function htmlstringparser (htmlstring) {
  return <div dangerouslySetInnerHTML={{__html: htmlstring}} />;
}
