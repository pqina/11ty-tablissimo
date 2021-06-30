const tabletop = require('../index');
const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
    // load markdown
    const md = markdownIt({ html: true });

    // syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    // add tabletop
    eleventyConfig.addPlugin(tabletop, {
        // create additional shortcode {% tbl %}
        shortcode: 'tbl',

        // these properties are set to all tabletops
        format: {
            // format as code block
            pre: (str) => md.render('```html\n' + str + '\n```'),

            // fomat as code snippet
            code: (str) => `<code>${str}</code>`,

            // format as date
            date: (str) =>
                new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
                    new Date(str)
                ),

            // format as date
            time: (str) =>
                new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
                    new Date(str)
                ),

            // make bold strings
            bold: (str) => `<b>` + str + '</b>',

            // render as markdown
            markdown: (str) => md.render(str).replace(/<p>|<\/p>/g, ''),

            // format numbers
            usd: (str) =>
                new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(str),

            location: (str) =>
                /,/.test(str)
                    ? `<a href="https://www.openstreetmap.org/?query=${str}" target="_blank" rel="noreferrer" title="Show ${str} on map">${str}</a>`
                    : str,
        },
    });

    // config
    return {
        dir: {
            input: 'src',
            output: 'dest',
        },
    };
};
