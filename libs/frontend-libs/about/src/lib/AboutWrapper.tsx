import Paper from '@mui/material/Paper';
import "./AboutWrapper.css";
import Header from 'libs/frontend-libs/shared/src/lib/Header';

function AboutWrapper() {

  return (
    <>
      <Header name="O Stránke" />
      <Paper elevation={3}>
        <p className="helperText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis officiis quis ipsa voluptas aliquam asperiores fuga repellendus libero, vel commodi!
          <h1 className="ownerName">Správca je: ...</h1>
        </p>
      </Paper>
    </>
  )
}

export default AboutWrapper