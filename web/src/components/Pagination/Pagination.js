import { Link, routes } from '@redwoodjs/router'

const Pagination = ({ count, page, perPage }) => {
  const items = []
  const addButton = ({ text, page }) =>
    items.push(
      <Link
        key={page}
        to={routes.games({ page })}
        className="text-center inline-block m-2 w-14 py-1 px-1 border-4 border-purple rounded-full"
      >
        {text}
      </Link>
    )

  const totalPages = Math.ceil(count / perPage)
  if (page > 10) addButton({ text: '<<', page: page - 10 })
  if (page > 1) addButton({ text: '<', page: page - 1 })
  items.push(
    <div key={page} className="inline-block mx-1 py-1 px-3 ">
      {page}
    </div>
  )
  if (page < totalPages) addButton({ text: '>', page: page + 1 })
  if (page < totalPages - 10) addButton({ text: '>>', page: page + 10 })

  return <div className="text-lg text-gray-900 font-semibold">{items}</div>
}

export default Pagination
