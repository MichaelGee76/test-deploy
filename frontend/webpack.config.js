const path = require("path");

module.exports = {
    entry: "./src/index.js", // Der Einstiegspunkt deiner Anwendung
    output: {
        path: path.resolve(__dirname, "dist"), // Ausgabeverzeichnis für gebündelte Dateien
        filename: "bundle.js", // Name der gebündelten Datei
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Regex für JavaScript-Dateien
                exclude: /node_modules/, // Ausschluss von node_modules
                use: {
                    loader: "babel-loader", // Verwenden des Babel-Loaders
                },
            },
        ],
    },
};
