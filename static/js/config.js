window.BINANCE_CONFIG = {
    chunks: {
        // Core vendor chunks
        vendor: {
            react: '/static/vendor/react.production.min.18.2.0.js',
            reactDom: '/static/vendor/react-dom.production.min.18.2.0.js'
        },
        // Feature chunks
        features: {
            '283': '/static/chunks/283.e907651b.js',
            '2160': '/static/chunks/2160.578aede9.js',
            '8815': '/static/chunks/8815.67eb015a.js',
            'layout': '/static/chunks/layout-5fa9.069ca69c.js',
            '6587': '/static/chunks/6587.42ff16d3.js',
            '2899': '/static/chunks/2899.0a428e9c.js',
            '1323': '/static/chunks/1323.496c166a.js',
            '1898': '/static/chunks/1898.eb5855a5.js',
            '1528': '/static/chunks/1528.b666c7ab.js'
        }
    },
    fonts: {
        BinancePlex: {
            medium: '/static/fonts/BinancePlex-Medium.woff2'
        }
    },
    websocket: {
        url: 'ws://127.0.0.1:8080',
        pushSdk: '/static/vendor/web-push-odin-sdk@0.0.29.js'
    }
}; 