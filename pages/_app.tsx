import { AppProps } from "next/app";
import '@/app/styles/main.scss'

import { appWithTranslation } from 'next-i18next'

function MultiSite({ Component, pageProps }: AppProps) {
    return <div>
        <Component {...pageProps} />
      </div>

}

export default appWithTranslation(MultiSite)