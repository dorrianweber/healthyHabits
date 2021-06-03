import useDarkMode from "use-dark-mode";

function DarkModeToggle() {
  const darkMode = useDarkMode(false);
  const darkSwitch = () => {
    darkMode.toggle();
    console.log(darkMode.value);
  };
  return (
    <div id="toggleEmote">
      ☀
      <label className="switch">
        <input checked={darkMode.value} onChange={darkSwitch} type="checkbox" />
        <span className="slider round"></span>
      </label>
      ☾
    </div>
  );
}

export default DarkModeToggle;
