
import * as wi from "react-icons/wi";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="wi" icons={wi}/>
    </div>
  );
}
