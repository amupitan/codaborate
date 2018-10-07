import * as React from 'react';
import Notepad from './notepad/Notepad';

import './Editor.css';

const Editor: React.SFC = () => (
    <div className='editor-container'>
        <Notepad />
    </div>
);

export default Editor;
