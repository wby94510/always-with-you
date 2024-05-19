export const useLoader = () => {
  const preloadImage = (url: string, callback: (url: string) => void) => {
    const img = new Image()
    img.onload = () => callback(img.src)
    img.src = url
  }
  return { preloadImage }
}
