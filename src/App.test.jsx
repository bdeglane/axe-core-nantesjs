import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from './App';
import { axe as jestAxe } from 'jest-axe'
import { shallow } from 'enzyme';

describe('<App />', () => {

  let jestAxeComponent

  beforeEach(() => {
    const component = (< App />)

    jestAxeComponent = ReactDOMServer.renderToString(component)
  })

  it('renders without crashing', () => {
    shallow(<App />)
  })

  describe('a11y', () => {
    it('should be valid', async () => {
      const results = await jestAxe(jestAxeComponent, {
        rules: {
          // for demonstration only, don't disable rules that need fixing.
          // 'aria-valid-attr-value': { enabled: false }
        }
      })

      expect(results).toHaveNoViolations()
    })
  })
})
