import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <AppBar position="static">
        <Toolbar>Skyone Chalange</Toolbar>
      </AppBar>

      <Grid
        container
        justify="center"
        alignContent="center"
        style={{ marginTop: 50 }}
      >
        <Typography variant="h5">
          OI, Bem vindo ao desafio da Skyone!
        </Typography>
      </Grid>

      <Container style={{ marginTop: 60 }}>
        <Grid container justify="space-evenly">
          {data.map((item) => (
            <Grid item xs={1}>
              <Typography variant="subtitle1">{item}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
