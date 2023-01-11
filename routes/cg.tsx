
import * as cg from "react-icons/cg";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="cg" icons={cg}/>
    </div>
  );
}
