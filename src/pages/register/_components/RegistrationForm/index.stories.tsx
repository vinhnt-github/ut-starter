import { fn } from "@storybook/test";
import RegistrationForm from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: RegistrationForm,
    args: {
        onSubmit: fn()
    }
} satisfies Meta<typeof RegistrationForm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

