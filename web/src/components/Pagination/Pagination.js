import { Link, routes } from '@redwoodjs/router'

const Pagination = ({ count, page, perPage }) => {
  const items = []
  const addButton = ({ text, page }) =>
    items.push(
      <li key={page} className="inline-block mx-1 text-indigo-400">
        <Link to={routes.games({ page })} className="py-1 px-3">
          {text}
        </Link>
      </li>
    )

  const totalPages = Math.ceil(count / perPage)

  if (page > 10) addButton({ text: '-10', page: page - 10 })
  addButton({ text: 'previous', page: page - 1 })
  items.push(
    <li key={page} className="inline-block mx-1 py-1 px-3">
      {page}
    </li>
  )
  addButton({ text: 'next', page: page + 1 })
  if (page < count - 10) addButton({ text: '+10', page: page + 10 })

  return (
    <>
      <ul>{items}</ul>
    </>
  )
}

export default Pagination
