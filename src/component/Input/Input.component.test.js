import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { mount } from 'enzyme'
import axe from 'axe-core'
import { axe as jestAxe, configureAxe } from 'jest-axe'

import { Input } from './Input.component'
import { mountToDoc } from '../../setupTests'

describe('<Input />', () => {

  let axeComponent
  let component
  let html
  let wrapper

  const props = {
    id: 'test',
    name: 'test',
    onChange: (c) => c,
    type: 'text',
    value: 'test',
  }

  beforeEach(() => {
    component = mount(<Input {...props} />)

    wrapper = mountToDoc(<Input {...props} />)
    axeComponent = wrapper.getDOMNode()

    html = ReactDOMServer.renderToString(<Input {...props} />)
  })

  describe('Testing Axe Core', () => {

    it.skip('should test axe core', async () => {
      const res = await axe.run(axeComponent, {
        runOnly: {
          values: ["wcag2a", "wcag2aa"]
        },
        resultTypes: ["violations"]
      })

      if (res.violations.length > 0) {
        console.log(res.violations)
      }

      expect(res.violations.length).toEqual(0)
    })

    it('should have label error', async () => {
      const results = await jestAxe(html)
      expect(results.violations.length).toBe(1)
    })

    it('should test axe core with jest plugin throw error', async () => {
      const results = await jestAxe(html)
      expect(results).toHaveNoViolations()
    })

    it('should test axe core with jest plugin skip unrelevant error', async () => {
      const results = await jestAxe(html, {
        rules: {
          // for demonstration only, don't disable rules that need fixing.
          'label': { enabled: false }
        }
      })
      expect(results).toHaveNoViolations()
    })
  })
})
