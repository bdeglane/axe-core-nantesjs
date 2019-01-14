import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axe from 'axe-core'
import { axe as jestAxe } from 'jest-axe'

import { Input } from './Input.component'
import { mountToDoc } from '../../setupTests'

describe('<Input />', () => {

  let axeComponent
  let jestAxeComponent
  let wrapper

  const props = {
    label: 'Test input',
    name: 'test',
    onBlur: c => c,
    onChange: c => c,
    type: 'email',
    value: 'test',
  }

  beforeEach(() => {
    const component = (<div>
      <p id="describedBytest"></p>
      <Input {...props} />
    </div >)

    wrapper = mountToDoc(component)
    axeComponent = wrapper.getDOMNode()

    jestAxeComponent = ReactDOMServer.renderToString(component)
  })

  describe('Testing Axe Core', () => {

    it('should test axe core', async () => {
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

    it('should test axe core with jest plugin throw error', async () => {

      console.log({ jestAxeComponent });

      const results = await jestAxe(jestAxeComponent)
      expect(results).toHaveNoViolations()
    })

    it('should test axe core with jest plugin skip unrelevant error', async () => {
      const results = await jestAxe(jestAxeComponent, {
        rules: {
          // for demonstration only, don't disable rules that need fixing.
          'label': { enabled: false },
          'aria-valid-attr-value': { enabled: false }
        }
      })

      expect(results).toHaveNoViolations()
    })
  })
})
