export default [
    // Headers - Setting them from 1 to 6 resulted in a stupid bug where they'd only work as h1 tags irrelevant to the number of #'s
    [/#{6}\s([^\n]+)/g, "<h6>$1</h6>"],
    [/#{5}\s([^\n]+)/g, "<h5>$1</h5>"],
    [/#{4}\s([^\n]+)/g, "<h4>$1</h4>"],
    [/#{3}\s([^\n]+)/g, "<h3>$1</h3>"],
    [/#{2}\s([^\n]+)/g, "<h2>$1</h2>"],
    [/#{1}\s([^\n]+)/g, "<h1>$1</h1>"],

    // Bolds, italics, hyperlink
    [/\*{2}([^\n]+?)\*{2}/g, '<strong>$1</strong>'], /* Bold */
    [/(?<=^|\s)_{2}([^\n]+?)_{2}/g, '<strong>$1</strong>'], /* Bold */
    [/\*([^\n]+?)\*/g, '<em>$1</em>'], /* Italic */
    [/(?<=^|\s)_([^\n]+?)_/g, '<em>$1</em>'], /* Italic */

    // Hyperlink and Images
    [/!\[(.+?)\]\((.+?)\s(.+?)\)/g, "<img src='$2' alt='$1' title='$3'/>"], /* Image */
    [/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>'], /* Hyperlink */

    // Paragraph
    [/([^\n]+\n?)/g, "<p>$1</p>"],

    // Code
    [/`([^\n]*?)`/g, "<code>$1</code>"], /* Single line code */
]

