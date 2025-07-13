import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://carloss-app-jd4l.glide.page/dl/a400f7/s/85159a/r/a-k3jPSWlSAKokMunvj5TDg/${path}`)
    }
}
