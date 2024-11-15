import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * MarkdownEditor is a React functional component that provides a simple markdown editor.
 * It consists of a textarea for input and a preview area that renders the markdown.
 *
 * @component
 * @example
 * return (
 *   <MarkdownEditor />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function MarkdownEditor() {
    function reverseSentence(sentence) {
        return sentence
            .split(' ')
            .reverse()
            .join(' ')
            .replace(/^\w/, (c) => c.toUpperCase());
    }
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '50%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}