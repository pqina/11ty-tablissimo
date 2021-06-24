const tablissimo = require('@pqina/tablissimo');

module.exports = {
    configFunction: function (eleventyConfig, options = {}) {
        // handles parsing the table
        function handle(content, name) {
            return tablissimo(content, {
                ...options,
                ...options[name],
                name,
            });
        }

        // create custom shortcode
        const { shortcode } = options;
        if (shortcode) eleventyConfig.addPairedShortcode(shortcode, handle);

        // also create tablissimo
        eleventyConfig.addPairedShortcode('tablissimo', handle);
    },
};
