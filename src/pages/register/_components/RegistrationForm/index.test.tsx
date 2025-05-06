import { render, screen, waitFor } from '@testing-library/react';
import RegistrationForm from '.';
import { composeStory } from '@storybook/react';
import * as stories from './index.stories';

describe(RegistrationForm, () => {
    it('Submit button disabled in initial form', async () => {
        // Arrange
        const Component = composeStory({
            args: {
                onSubmit: () => Promise.resolve(),
            },
        }, stories.default);

        // Act
        render(<Component />);
        const submitButton = screen.getByText('Submit');

        // Assert
        expect(submitButton).toBeDisabled();
    });
    it('Submit button enable when form full filled', async () => {
        // Arrange
        const Component = composeStory({
            args: {
                onSubmit: () => Promise.resolve(),
                defaultValue: {
                    name: 'John Doe',
                    email: 'abc@xyz.com',
                    role: 'user',
                    terms: true,
                }
            },
        }, stories.default);

        // Act
        render(<Component />);
        const submitButton = screen.getByText('Submit');

        // Assert
        expect(submitButton).toBeEnabled();
    });
});
