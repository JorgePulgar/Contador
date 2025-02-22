const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.gif$/,
                type: 'asset/inline',
            },
            {
                test: /\.(ttf|eot|svg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,  // Usamos este loader para extraer el CSS
                  'css-loader',    // Procesa los archivos CSS
                  'sass-loader',   // Procesa los archivos SASS
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'styles.css'  // Nombre del archivo CSS generado
        })
    ],
    resolve: {
        alias: {
            config$: './configs/app-config.js',
            react: './vendor/react-master',
        },
        extensions: ['.js', '.jsx', 'scss'],
        modules: [
            'node_modules',
            'bower_components',
            'shared',
            '/shared/vendor/modules',
        ],
    },
};