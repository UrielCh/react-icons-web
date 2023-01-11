
import * as fi from "react-icons/fi";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="fi" icons={fi}/>
    </div>
  );
}
