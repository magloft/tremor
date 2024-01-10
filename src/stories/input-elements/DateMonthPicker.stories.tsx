import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { DateMonthPicker } from "components";
// import { fr } from "date-fns/locale";

const meta: Meta<typeof DateMonthPicker> = {
  title: "UI/Input/DateMonthPicker",
  component: DateMonthPicker,
  parameters: {
    sourceLink:
      "https://github.com/tremorlabs/tremor/tree/main/src/components/input-elements/DateMonthPicker",
  },
};

export default meta;
type Story = StoryObj<typeof DateMonthPicker>;

// Components
function Uncontrolled({ ...args }) {
  const [value, setValue] = useState<Date>(args.value!);

  return (
    <div className="space-y-4">
      <DateMonthPicker {...args} value={value} onValueChange={(value) => setValue(value!)} />
      <div className="text-slate-500">
        <p>Filtered Data</p>
        <p>Date: {String(value)} </p>
      </div>
    </div>
  );
}

// Templates

const UncontrolledTemplate: Story = {
  render: ({ ...args }) => <Uncontrolled {...args} />,
};
// Stories
export const Default: Story = {
  ...UncontrolledTemplate,
  args: {
    value: new Date(2022, 10, 1),
  },
};

export const ShowIcon: Story = {
  ...UncontrolledTemplate,
  args: {
    showIcon: true,
  },
};

export const Placeholder: Story = {
  ...UncontrolledTemplate,
  args: {
    placeholderText: "Select Month Custom Placeholder",
  },
};
