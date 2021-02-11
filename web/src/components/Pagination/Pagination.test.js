import { render } from '@redwoodjs/testing'

import Pagination from './Pagination'

describe('Pagination', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pagination />)
    }).not.toThrow()
  })
})
