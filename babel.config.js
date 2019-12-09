module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-flow",
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        plugins: [
            "@babel/plugin-transform-react-jsx",
            "@babel/plugin-proposal-function-bind"
        ]
    };
}
