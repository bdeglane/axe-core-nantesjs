import React from 'react';
import axe from 'axe-core';

import { Input } from './input.component';
import { mountToDoc } from '../../setupTests';


describe('<Input />', () => {

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
