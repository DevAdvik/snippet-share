import React from 'react';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/base16/humanoid-dark.css';


class CodeBlock extends React.Component {
    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        const nodes = document.querySelectorAll('pre code');
        nodes.forEach(node => hljs.highlightBlock(node));
    }

    render() {
        const codestring = "const hey = `hey man`"
        return (
            <pre>
                <code>
                    {codestring};
                </code>
            </pre>
        );
    }
}

export default CodeBlock;