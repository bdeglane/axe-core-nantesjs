import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from 'axe-core';
import { axe as jestAxe } from 'jest-axe';
import { Input } from './Input.component';
import { mountToDoc } from '../../setupTests';

describe('<Input />', () => {
  describe('with axe', () => {

    let input;
    let component;

    beforeEach(() => {
      input = mountToDoc(<Input
          type="text"
          name="test"
          id="test"
          value="test"
          onChange={(c) => c}
        />);

      component = input.getDOMNode();
    });

    test('a11y', async () => {

      const res = await axe.run(component, {
        runOnly: {
          values: ["wcag2a", "wcag2aa"]
        },
        resultTypes: ["violations"]
      });

      if (res.violations.length > 0) {
        console.log(res.violations);
      }

      expect(res.violations.length).toBe(0);
    });
  });

  describe('with jest-axe', () => {

    it('a11y', async () => {
      const html = ReactDOMServer.renderToString(<Input
        type="text"
        name="test"
        id="test"
        value="test"
        onChange={(c) => c}
      />);

      const results = await jestAxe(html)

      expect(results).toHaveNoViolations()
    });
  });
});
