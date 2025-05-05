import { useForm } from 'react-hook-form';
import { FormData, FormValidationSchema } from './schema';
import { zodResolver } from "@hookform/resolvers/zod"

type Props = {
    onSubmit: (data: FormData) => void;
    defaultValue?: FormData; // Using for test
};

export default function RegistrationForm({ defaultValue, onSubmit }: Props) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
        watch
    } = useForm<FormData>({
        resolver: zodResolver(FormValidationSchema),
        defaultValues: defaultValue,
    });

    const { name, email, role, terms } = watch();
    const isButtonDisable = !name || !email || !role || !terms;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='name' >Name</label>
                <input id="name" {...register('name')} />
                {errors.name && <p role="alert">{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor='email' >Email</label>
                <input id="email" type="text" {...register('email')} />
                {errors.email && <p role="alert">{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor='role' >Role</label>
                <select id="role" {...register('role')}>
                    <option value="">-- Select --</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                {errors.role && <p role="alert">{errors.role.message}</p>}
            </div>

            <div>
                <label htmlFor='terms' >
                    <input id="terms" type="checkbox" {...register('terms')} />
                    Accept terms
                </label>
                {errors.terms && <p role="alert">{errors.terms.message}</p>}
            </div>

            <button type="submit" disabled={isButtonDisable}>
                Submit
            </button>

            {isSubmitted && <p role="status">{isSubmitted}</p>}
        </form>
    );
}
