import React, { useEffect, useRef } from 'react';

const Textarea = React.forwardRef((props, ref) => {
  const textareaRef = useRef(null);

  const autoResize = () => {
    textareaRef.current.style.height = '1px';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    autoResize();
  }, []);

  return (
    <textarea
      onInput={() => {
        autoResize();
      }}
      rows={1}
      {...props}
      ref={(currRef) => {
        textareaRef.current = currRef;
        ref.current = currRef;
      }}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
