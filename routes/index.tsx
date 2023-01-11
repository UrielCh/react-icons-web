import { Head } from "$fresh/runtime.ts";
import * as bs from "react-icons/bs";
import { IconSet } from "../components/IconSet.tsx";

export default function Home() {
  return (
    <IconSet libId="bs" icons={bs}/>
  );
}
