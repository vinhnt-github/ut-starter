// This test verifies that the UserInfor component correctly displays user information.
// The `loginUser` function from `userService` is mocked to return a predefined value ('mock-token').
// The test uses `screen.findByText` to asynchronously query the DOM for the mocked token.

import { render, screen } from "@testing-library/react";
import UserInfor from ".";

jest.mock('../../services/userService', () => ({
    loginUser: jest.fn(async () => 'mock-token'),
}));

describe(UserInfor, () => {
    it('Display user infor', async () => {
        render(<UserInfor />);
        const userInfo = await screen.findByText('mock-token');
        expect(userInfo).toBeInTheDocument();
    });
});
