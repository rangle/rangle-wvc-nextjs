import renderer from 'react-test-renderer'
import Pin from './Pin'

describe('pin marker for maps', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Pin />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
