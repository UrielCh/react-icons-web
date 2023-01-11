
import * as gi from "react-icons/gi";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="gi" icons={gi}/>
    </div>
  );
}
