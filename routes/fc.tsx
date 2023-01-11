
import * as fc from "react-icons/fc";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="fc" icons={fc}/>
    </div>
  );
}
