import { onMounted } from "vue"

export const useBalls = () => {
  onMounted(() => {
    console.log(11)
  })

  const hello = () => {
    console.log('hello')
  }
  return {
    hello
  }
}