
import * as ai from "react-icons/ai";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="ai" icons={ai}/>
    </div>
  );
}
