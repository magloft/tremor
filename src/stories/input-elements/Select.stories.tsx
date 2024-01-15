import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Select, Text } from "components";
import {
  SimpleSelect,
  SimpleSelectControlled,
  SimpleSelectWithStaticAndDynamicChildren,
} from "./helpers/SimpleSelect";

import { CalendarIcon } from "assets";

const meta: Meta<typeof Select> = {
  title: "UI/Input/Select",
  component: Select,
  parameters: {
    sourceLink:
      "https://github.com/tremorlabs/tremor/tree/main/src/components/input-elements/Select",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const UncontrolledDefault: Story = {
  render: SimpleSelect,
  args: {},
};

export const UncontrolledDefaultWithStaticAndDynamicChildren: Story = {
  render: SimpleSelectWithStaticAndDynamicChildren,
  args: {},
};

export const UncontrolledOnValueChange: Story = {
  render: SimpleSelect,
  args: { onValueChange: (v: string) => alert(v) },
};

export const UncontrolledEnableClear: Story = {
  render: SimpleSelect,
  args: { onValueChange: (v: string) => alert(v), enableClear: true },
};

export const UncontrolledDefaultValue: Story = {
  render: SimpleSelect,
  args: {
    defaultValue: "5",
  },
};

export const UncontrolledIcon: Story = {
  render: SimpleSelect,
  args: {
    defaultValue: "5",
    icon: CalendarIcon,
  },
};

export const UncontrolledDisabled: Story = {
  render: SimpleSelect,
  args: {
    icon: CalendarIcon,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: SimpleSelectControlled,
};

export const TextStyle: Story = {
  render: (args) => (
    <div className="w-full gap-2 flex flex-row items-center">
      <div className="w-1/6">
        <SimpleSelect {...args} />
      </div>
      <div className="flex-1">
        <Text>by Country</Text>
      </div>
    </div>
  ),
  args: {
    type: "text",
    placeholder: "Users",
    className: "bg-transparent",
    enableClear: false,
  },
};
