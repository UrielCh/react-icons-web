
import * as go from "react-icons/go";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="go" icons={go}/>
    </div>
  );
}
