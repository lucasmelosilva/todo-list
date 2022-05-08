import { MoonStars } from "phosphor-react"

export function ThemeButton() {

  function changeTheme() {
    document.querySelector('html').classList.toggle('dark');
  }

  return (
    <button onClick={changeTheme}>
      <MoonStars size="30px" weight="thin" className="text-zinc-700  dark:text-slate-400 dark:hover:text-slate-200 hover:text-zinc-900 transition-colors" />
    </button>
  )
}
