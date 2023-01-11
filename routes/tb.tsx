
import * as tb from "react-icons/tb";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="tb" icons={tb}/>
    </div>
  );
}
