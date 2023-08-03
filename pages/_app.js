// このファイルでインポートしたcssファイルはすべてのページに反映される
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}