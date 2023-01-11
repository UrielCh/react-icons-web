
import * as fa from "react-icons/fa";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="fa" icons={fa}/>
    </div>
  );
}
