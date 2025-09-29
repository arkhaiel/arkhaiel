export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const res = await $fetch(`https://api.github.com/repos/arkhaiel/nsi/actions/workflows`, {
    headers: {
      Authorization: `Bearer ${config.ghToken}`,
      Accept: 'application/vnd.github+json',
    },
  })

  return res
})
