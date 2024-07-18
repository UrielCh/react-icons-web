
import * as md from "@preact-icons/md";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="md" icons={md}/>
    </div>
  );
}
