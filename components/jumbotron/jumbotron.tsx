import { PropsWithoutRef } from "react";

type JumbotronProps = {
  title: string;
  content: string;
  linkLabel: string;
  bgColor: string;
  txtColor: string;
};

export default function Jumbotron( props: JumbotronProps ) {
  return (
    <div className={`h-100 p-5 rounded-3 border text-${props.txtColor} ${props.bgColor}`}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button className={`btn btn-outline-${props.txtColor}`} type="button">
        {props.linkLabel}
      </button>
    </div>
  );
}
