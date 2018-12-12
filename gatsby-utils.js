import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"

import { config, messages, localeData } from "./data/languages"
import { LocaleProvider, LocaleContext } from "./src/components/LocaleProvider"

addLocaleData(localeData)

export const wrapWithLocaleProvier = ({ element }) => (
  <LocaleProvider defaultLocale={config.defaultLocale} locales={config.locales}>
    <LocaleContext.Consumer>
      {localeState => (
        <IntlProvider key={localeState.currentLocale} locale={localeState.currentLocale} messages={messages[localeState.currentLocale]}>
          {element}
        </IntlProvider>
      )}
    </LocaleContext.Consumer>
  </LocaleProvider>
)
