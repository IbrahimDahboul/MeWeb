function Message() {
  return (
    <div className="msg">
      <div className="topping" />

      <div className="card">
        <h1>Ibrahim Dahboul</h1>
        <p>Computer Engineering</p>

        <img
          id="cantact"
          className="github"
          src="src\logos\github.png"
          alt="icon"
          onClick={() => window.open("https://github.com/IbrahimDahboul")}
        />

        <img
          id="cantact"
          className="linkedin"
          src="src\logos\linkedin\LI-China-In-Bug.png"
          alt="icon"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ibrahim-dahboul-a62090348/",
            )
          }
        />

        <img
          id="cantact"
          className="gmail"
          src="src\logos\gmail.png"
          alt="icon"
          onClick={() =>
            (window.location.href = "mailto:ibrahimdahboul190@gmail.com")
          }
        />
      </div>
    </div>
  );
}

export default Message;
