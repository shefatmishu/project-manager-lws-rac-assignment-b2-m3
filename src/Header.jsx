import Button from "./components/Button";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

export default function Header() {
  return (
    <nav>
      <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
        <Logo />
        <Menu />
        <Button />
      </div>
    </nav>
  );
}
