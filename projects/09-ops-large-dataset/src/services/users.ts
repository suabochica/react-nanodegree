export const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return await fetch(`https://randomuser.me/api?results=10&seed=suabochica&page=${pageParam}`)
    .then(async response => {
      if (!response.ok) throw new Error('Error en la petición')
      return await response.json()
    })
    .then(response => {
      const currentPage = Number(response.info.page)
      const nextPage = currentPage > 10 ? undefined : currentPage + 1

      return {
        users: response.results,
        nextPage
      }
    })
}
