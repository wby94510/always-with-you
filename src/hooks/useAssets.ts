export const useAssets = () => {
  const getAsset = (name: string) => {
    return new URL(`../assets/${name}`, import.meta.url).href
  }
  return { getAsset }
}
