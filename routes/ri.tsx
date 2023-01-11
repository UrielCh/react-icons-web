
import * as ri from "react-icons/ri";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="ri" icons={ri}/>
    </div>
  );
}
