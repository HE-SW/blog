import React from 'react';
import { FormField } from '@sanity/base/components';
import AceEditor from 'react-ace';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';

import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-javascript';
import { useCallback } from 'react';

const CodeInput = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    // Placeholder text from the schema
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    // Method to handle focus state
    // Method to handle blur state
    onChange,
  } = props;
  const codeChange = useCallback(
    (code) => {
      onChange(PatchEvent.from(code ? set(code) : unset()));
    },
    [onChange]
  );
  return (
    <FormField
      description={type.description} // Creates description from schema
      title={type.title} // Creates label from schema title
      __unstable_markers={markers} // Handles all markers including validation
      __unstable_presence={presence} // Handles presence avatars
    >
      <AceEditor
        ref={ref}
        mode='javascript'
        name='ace-editor-code'
        width='100%'
        theme='github'
        style={{
          boxShadow: '0 0 0 1px #cad1dc',
          lineHeight: 1.6,
        }}
        value={value}
        tabSize={2}
        setOptions={{ useWorker: false }}
        onChange={codeChange}
      />
    </FormField>
  );
});

export default CodeInput;