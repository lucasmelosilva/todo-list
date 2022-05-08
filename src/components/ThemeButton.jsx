import { MoonStars } from "phosphor-react"

export function ThemeButton({ changeTheme }) {

  function changeTheme() {
    console.log('changeTheme');
    document.querySelector('html').classList.toggle('dark');

    localStorage.getItem('color-theme') === 'dark' ? localStorage.setItem('color-theme', '') : localStorage.setItem('color-theme', 'dark');
  }

  return (
    <button onClick={changeTheme}>
    </button>
  )
}
