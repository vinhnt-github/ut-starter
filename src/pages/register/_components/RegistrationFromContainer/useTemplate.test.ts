import { renderHook, act } from '@testing-library/react';
import useTemplate from './useTemplate';
import { useLogger } from '@/components/hooks/logger/useLogger';
import { FormData } from '../RegistrationForm/schema';
import { getServer } from '@/support/msw/node';
import { http } from 'msw';


jest.mock('@/components/hooks/logger/useLogger', () => {
    const loggerMock = jest.fn();
    return {
        useLogger: () => loggerMock
    }
});
describe(useTemplate, () => {
    it('should call logger after submission successful', async () => {
        // Arrange
        getServer().use(
            http.post('/api/register', () => {
                return Response.json({ message: 'Registration successful' })
            })
        );

        const useLoggerMock = jest.mocked((useLogger()))
        const { result } = renderHook(() => useTemplate());
        const formData = { name: 'John Doe', email: 'john@example.com', role: 'user', terms: true } as FormData;

        // Act
        await act(async () => {
            await result.current.handleSubmit(formData);
        });

        // Asssert
        expect(useLoggerMock).toHaveBeenCalledWith('Registration successful');
    });
    it('should call logger after submission failed', async () => {
        // Arrange
        // Act
        // Asssert
    });
    it('should update isSubmitting during API call', async () => {
        // Arrange
        getServer().use(
            http.post('/api/register', async () => {
                await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate delay
                return Response.json({ message: 'Registration successful' });
            })
        );

        const { result } = renderHook(() => useTemplate());
        const formData: FormData = { name: 'John Doe', email: 'john@example.com', role: 'user', terms: true };

        // Assert initial state
        expect(result.current.isSubmitting).toBe(false);

        // Act
        let submitPromise: Promise<void>;
        act(() => {
            submitPromise = result.current.handleSubmit(formData);
        });

        expect(result.current.isSubmitting).toBe(true); // During submission

        // Wait for the submission to complete
        await act(async () => {
            await submitPromise;
        });

        // Assert final state
        expect(result.current.isSubmitting).toBe(false); // After submission
    });
    it('Request body should be same as form data', async () => {
        // Arrange
        const getRequestBody = jest.fn();
        getServer().use(
            http.post('/api/register', async ({ request }) => {
                const body = await request.json();
                getRequestBody(body);
                return Response.json({ message: 'Registration successful' });
            })
        );
        const { result } = renderHook(() => useTemplate());
        const formData: FormData = { name: 'John Doe', email: 'john@example.com', role: 'user', terms: true };

        // Act
        await act(async () => {
            await result.current.handleSubmit(formData);
        });

        // Assert
        expect(getRequestBody).toHaveBeenCalledWith(formData);
    });
});