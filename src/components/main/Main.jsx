import styled from "./main.module.css";

const Main = () => {
  return (
    <>
      <main className={styled.main}>
        <div className="container">
          <div className={styled.card}>
            <h2 className={styled.card_title}>This is the note title</h2>
            <p className={styled.card_text}>This is the note content</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;