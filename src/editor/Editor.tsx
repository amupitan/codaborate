import * as React from 'react';
import Notepad, { IProps as NotepadProps, ITheme as NotepadTheme } from './notepad/Notepad';

import './Editor.css';

// tslint:disable-next-line:no-empty-interface
interface IEditorProps extends NotepadProps { }

const EditorComp: React.SFC<IEditorProps> = (props: IEditorProps) => (
    <div className='editor-container'>
        <Notepad {...props} />
    </div>
);

class Editor {
    constructor(private readonly theme: NotepadTheme) {
        this.theme = theme;
    }

    public renderEditor(content: string): JSX.Element {
        return <EditorComp {...this.theme} content={content} />;
    }
}

export default Editor;