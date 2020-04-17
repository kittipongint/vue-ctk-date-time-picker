import moment from 'moment'

export const getDefaultLocale = () => {
  if (typeof window === 'undefined') return null

  const { userLanguage, language } = window.navigator
  const locale = (userLanguage || language || 'en').substr(0, 2)
  moment.locale(locale)
  return locale
}

export const toBuddhistYear = (moment, format) => {
  const christianYear = moment.format('YYYY')
  const buddhishYear = (parseInt(christianYear) + 543).toString()
  return moment
    .format(format.replace('YYYY', buddhishYear).replace('YY', buddhishYear.substring(2, 4)))
    .replace(christianYear, buddhishYear)
}
