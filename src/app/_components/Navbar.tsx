import { AlignJustify } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-primary absolute flex items-center text-white">
      <div className="gap-2 p-2 px-4 flex-row flex text-2xl font-semibold items-center">
        <div className="text-3xl font-thin">MUAH</div>
        <AlignJustify />
      </div>
    </nav>
  );
}
