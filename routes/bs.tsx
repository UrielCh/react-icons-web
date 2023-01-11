
import * as bs from "react-icons/bs";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="bs" icons={bs}/>
    </div>
  );
}
