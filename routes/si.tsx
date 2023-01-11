
import * as si from "react-icons/si";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="si" icons={si}/>
    </div>
  );
}
