
import * as sl from "react-icons/sl";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="sl" icons={sl}/>
    </div>
  );
}
