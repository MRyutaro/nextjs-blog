import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
    return(
        <Layout>
            <Head>
                <title>
                    First Post!
                </title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                // いつロードするかを決める。これはブラウザが動いてないときにロードする設定
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </Layout>
    )
}
