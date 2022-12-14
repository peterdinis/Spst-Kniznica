import Paper from '@mui/material/Paper';
import './AboutWrapper.css';
import Header from 'libs/frontend-libs/shared/src/lib/Header';

function AboutWrapper() {
  return (
    <>
      <Header name="O Stránke" />
      <Paper elevation={3}>
        <h1 className="ownerName">Správca je ...</h1>
        <p className="helperText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi et
          nesciunt sed excepturi quaerat, incidunt a architecto molestiae! Saepe
          iusto temporibus eaque voluptate officiis facere veniam amet
          praesentium id.
        </p>
        <div className="mt-5 text-center">
          <a className="text-xl text-red-800" href="/chat">Pri probléme píšte tu</a>
        </div>
      </Paper>
    </>
  );
}

export default AboutWrapper;
