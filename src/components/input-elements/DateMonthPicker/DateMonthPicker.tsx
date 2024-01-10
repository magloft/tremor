import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type DateMonthPickerValue = Date | null;

export interface DateMonthPickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "defaultValue"> {
  value?: Date;
  onValueChange?: (value: DateMonthPickerValue) => void;
  displayFormat?: string;
  showIcon?: boolean;
  placeholderText?: string;
}

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef<HTMLDivElement, any>(
  ({ value, onClick, showIcon, placeholderText }: any, ref) => {
    return (
      <div
        className="flex w-full gap-2 px-4 py-2 bg-white border border-gray-[#D0D4DA] font-medium rounded-lg cursor-pointer"
        ref={ref}
        onClick={onClick}
        style={{
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
          width: "100%",
        }}
      >
        {showIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="my-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
              fill="#9BA2AE"
            />
          </svg>
        )}
        <span className="text-sm text-gray-900">{!value ? placeholderText : value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="my-auto ml-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
            fill="#9BA2AE"
          />
        </svg>
      </div>
    );
  },
);

const renderCustomHeader = ({ date, decreaseYear, increaseYear }: any) => {
  return (
    <div className="flex items-center justify-between px-4 text-gray-800 bg-white">
      <button
        type="button"
        className="text-sm font-bold hover:text-blue-500 focus:outline-none"
        onClick={decreaseYear}
      >
        &lt;
      </button>
      <div className="text-base font-bold">
        {date.toLocaleDateString("en-US", { year: "numeric" })}
      </div>
      <button
        type="button"
        className="text-sm hover:text-blue-500 focus:outline-none"
        onClick={increaseYear}
      >
        &gt;
      </button>
    </div>
  );
};

const DateMonthPicker = React.forwardRef<HTMLDivElement, DateMonthPickerProps>((props, ref) => {
  const { value, onValueChange, displayFormat, showIcon, placeholderText = "Select Month" } = props;

  const getLastDayOfCurrentMonth = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 1, 0);
  };

  return (
    <div ref={ref}>
      <DatePicker
        showMonthYearPicker
        selected={value}
        dateFormat={displayFormat ?? "MMMM yyyy"}
        onChange={(date) => {
          if (onValueChange) {
            onValueChange(date);
          }
        }}
        maxDate={getLastDayOfCurrentMonth()}
        renderCustomHeader={renderCustomHeader}
        customInput={<CustomInput showIcon={showIcon} placeholderText={placeholderText} />}
      />
    </div>
  );
});

DateMonthPicker.displayName = "DatePicker";

export default DateMonthPicker;
