// Next.jsでは、pages/_app.jsからグローバルCSSをインポートして追加することができます。
// それ以外の場所でグローバルCSSをインポートすることはできません。
// グローバルCSSファイルはどこに置いてもよく、どんな名前でも使うことができる。そこで、次のようにしてみよう。
// ・トップレベルのstylesディレクトリを作成し、global.cssファイルを作成する(既にあるけどねw)。
// ・styles/globals.cssの中に、以下のCSSを追加する。このコードは、いくつかのスタイルをリセットし、aタグの色を変更します。
import '../styles/globals.css';

export default function App({ Component, pageProps}) {
  return <Component {...pageProps} />;
}
