import React from "react";

export function Container(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["mx-auto w-full max-w-6xl px-4", props.className]
        .filter(Boolean)
        .join(" ")}
    >
      {props.children}
    </div>
  );
}
