import { useCallback, useState } from "react";
import { FormData } from "../RegistrationForm/schema";
import { useLogger } from "@/components/hooks/logger/useLogger";

export default function useTemplate() {
    const logger = useLogger();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = useCallback(async (data: FormData) => {
        setIsSubmitting(true)
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error('Failed to register');
            await res.json();
            logger('Registration successful');
        } catch (err) {
            logger('Registration failed');
        }
        finally {
            setIsSubmitting(false)
        }
    }, [])
    return {
        handleSubmit,
        isSubmitting
    };
}