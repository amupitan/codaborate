import * as React from 'react';
import './Notepad.css';

export interface ITheme {
    backgroundColor?: string;
    color?: string;
}

export interface IProps extends ITheme {
    content?: string;
}

const Notepad: React.SFC<IProps> = (props: IProps) => {
    const { content, ...styles } = props;
    return (
        <div className='notepad-editor' style={styles} contentEditable={true} suppressContentEditableWarning={true} >
            {content}
        </div>
    );
};

const defaultTheme: ITheme = {
    backgroundColor: '#000000',
    color: '#ffffff',
};

Notepad.defaultProps = {
    ...defaultTheme,
    content: 'Hello World! 😀',
};

export default Notepad;


