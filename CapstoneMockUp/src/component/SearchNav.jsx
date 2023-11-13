import "./SearchNav.css";

export default function SearchNav() {
  return (
    <nav className="search_nav">
      <i
        className="fa-solid fa-bars-staggered"
        onClick={() =>
          (document.querySelector("#small_screen").style.display = "block")
        }
      ></i>

      <div id="search_input_container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search" id="search_input" />
      </div>
      <div id="profile_container">
        <i className="fa-solid fa-clock-rotate-left"></i>

        <div id="profileImg">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3DTask%2Bmanager&psig=AOvVaw1ryJLIOAZx4p37bX4K-BgN&ust=1699933186170000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiFm9-GwIIDFQAAAAAdAAAAABAE"
            id="logo"
          />
        </div>
      </div>
    </nav>
  );
}
