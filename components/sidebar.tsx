import { JSX } from "preact";
import { providers } from "./providers.ts";

export default function SideBar(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const entrs = Object.entries(providers).filter(([a]) => {
    if (a.startsWith("hi")) {
      return false;
    }
    if (a.startsWith("io")) {
      return false;
    }
    if (a.startsWith("rx")) {
      return false;
    }
    return true;
  });
  return (
    <div class="min-w-[160px] gap-2 flex flex-col p-2">
      <div class="text-2xl text-pink-600 font-semibold pb-4">react-icons</div>
      <div>
          <a href={"./"}>Home</a>
        </div>
      {entrs.map(([k, p]) => (
        <div>
          <a href={"./" + k}>{p.name}</a>
        </div>
      ))}
    </div>
  );
}
