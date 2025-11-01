"use client";
import CountUp from "react-countup";
// type IProps = {
//   title?: string;
//   subtitle?: string;
//   admission?: boolean;
// };

const Counter = ({ end }: { end: number }) => {
  return (
    <>
      <CountUp end={end} enableScrollSpy />
    </>
  );
};

export default Counter;
