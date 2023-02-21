import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'
import '../../src/Editor.css'
const Editor = (props) => {

    const { editorName, language, value, onChange } = props;
    function handleChange(editor, data, value) {
        onChange(value);
    }
    const [open, setOpen] = useState(true);
    return (
        <div className={`editorContainer ${open ? '' : 'collasped'}`}>
            <div className='editorNameBox'>
                {editorName}
                <button onClick={() => setOpen(prevOpen => !prevOpen)} type="button" className='compressBtn'><FontAwesomeIcon icon={open? faCompressAlt: faExpandAlt}/></button>
            </div>
            <ControlledEditor onBeforeChange={handleChange} value={value} className='codeMirrorWrapper' options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
                theme: 'material',
            }} />
        </div>
    )
}

export default Editor