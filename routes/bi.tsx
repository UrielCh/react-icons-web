
import * as bi from "react-icons/bi";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="bi" icons={bi}/>
    </div>
  );
}
