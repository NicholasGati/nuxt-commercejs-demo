import Commerce from '@chec/commerce.js'
const commerce = new Commerce(process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY, true)
// eslint-disable-next-line
console.log(process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY)
export default (_, inject) => {
  inject('commerce', commerce)
}
