import { browser } from '@wdio/globals'

export default class Page {

  public open (path: string) {
    //return browser.url(`https://front-relatos-de-papel-red.vercel.app/${path}`)
    return browser.url(`http://localhost:5173/${path}`)
  }
}
