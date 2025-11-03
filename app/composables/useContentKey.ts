import type { Collections } from '@nuxt/content'

type Lang = 'fr' | 'en'
const DEFAULT_LOCALE: Lang = 'fr'

// → Déduit la locale de l'URL: /en/... → en, sinon fr
const localeFromPath = (path: string): Lang =>
  path.startsWith('/en') ? 'en' as const : 'fr' as const

export function useContentKey() {
  const route = useRoute()

  // Locale "URL" (stable SSR/CSR)
  const urlLocale = computed<Lang>(() => localeFromPath(route.path || '/'))

  // Chemin de contenu "sans préfixe de langue"
  const contentPath = computed(() => {
    const p = route.path || '/'
    return p.replace(/^\/en(?=\/|$)/, '') || '/'
  })

  // Clé de cache (stable SSR/CSR)
  const key = computed(() => `page:${urlLocale.value}:${contentPath.value}`)

  return { key, urlLocale, contentPath }
}

// Composable centralisé pour récupérer le contenu de page
export function useCurrentPage() {
  const { key, urlLocale, contentPath } = useContentKey()

  return useAsyncData(key.value, async () => {
    // collection selon la locale de l'URL
    const coll = ('content_' + urlLocale.value) as keyof Collections

    let doc = await queryCollection(coll).path(contentPath.value).first()

    // fallback sur la locale par défaut si vide
    if (!doc && urlLocale.value !== DEFAULT_LOCALE) {
      doc = await queryCollection(('content_' + DEFAULT_LOCALE) as keyof Collections)
        .path(contentPath.value)
        .first()
    }
    return doc
  }, {
    // refetch quand on change de page (ou de locale via URL)
    watch: [urlLocale, contentPath],
  })
}

export function useContentFiles(pathToSearch: string) {
  const { key, urlLocale, contentPath } = useContentKey()

  return useAsyncData(key.value + pathToSearch, async () => {
    console.log(key.value + 'files');

    // collection selon la locale de l'URL
    const coll = ('content_' + urlLocale.value) as keyof Collections

    let doc = await queryCollection(coll).where('path', 'LIKE', `%${pathToSearch}%`).all()

    // fallback sur la locale par défaut si vide
    if (!doc && urlLocale.value !== DEFAULT_LOCALE) {
      doc = await queryCollection(('content_' + DEFAULT_LOCALE) as keyof Collections).where('path', 'LIKE', `%${pathToSearch}%`).all()
    }
    return doc
  }, {
    // refetch quand on change de page (ou de locale via URL)
    watch: [urlLocale],
  })
}