import { AlignJustify } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute flex items-center bg-primary text-white">
      <div className="flex flex-row items-center gap-2 p-4 px-4 text-2xl font-semibold">
        <div className="text-3xl font-thin">MUAH</div>
        <AlignJustify />
      </div>
    </nav>
  );
}
