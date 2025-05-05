# Guide: Testing

This guide demonstrates how to use Mock Service Worker (MSW) to mock API requests in your tests.

## Steps to Use MSW in Tests

1. **Set Up MSW Server**:
   - Import the `getServer` function from your MSW setup.
   - Use the `getServer().use()` method to define request handlers for your tests.

2. **Mock API Responses**:
   - Use `http.post`, `http.get`, or other HTTP methods to define the API endpoint and its response.
   - Return a mocked response using `Response.json()` or other response utilities.

3. **Test API Interactions**:
   - Use `renderHook` or other testing utilities to render your hooks or components.
   - Trigger the API interaction (e.g., form submission) in your test.

4. **Assert API Behavior**:
   - Use spies or mocks (e.g., `jest.fn()`) to capture and assert the request body or other interactions.
   - Verify that the mocked API response is handled correctly in your code.

## Example: Testing a Successful Submission

```typescript
getServer().use(
  http.post('/api/register', () => {
    return Response.json({ message: 'Registration successful' });
  })
);
```

- This mocks a POST request to `/api/register` and returns a success message.

## Example: Capturing Request Body

```typescript
const getRequestBody = jest.fn();
getServer().use(
  http.post('/api/register', async ({ request }) => {
    const body = await request.json();
    getRequestBody(body);
    return Response.json({ message: 'Registration successful' });
  })
);
```

- This captures the request body sent to the `/api/register` endpoint and verifies it in the test.

## Notes

- Ensure that MSW is properly set up in your project and the server is started before running tests.
- Use `jest.mock` to mock dependencies like logging or other hooks as needed.

## References

- [MSW Documentation](https://mswjs.io/docs/)
- [Testing Library Documentation](https://testing-library.com/docs/)
