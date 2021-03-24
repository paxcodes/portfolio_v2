var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return

        return {
            plugins: [
                new PrerenderSpaPlugin(
                    path.resolve(__dirname, 'dist'),
                    ['/']
                ),
            ],
            devtool: 'source-map'
        }
    },
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: `Margret "Pax" Williams' Portfolio`,
        }
    }
}
