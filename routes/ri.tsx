
import * as ri from "@preact-icons/ri";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="ri" icons={ri}/>
    </div>
  );
}
