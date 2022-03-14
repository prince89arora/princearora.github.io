import * as React from "react";
import { CardProps } from "./types";

const Card = (props: CardProps) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
