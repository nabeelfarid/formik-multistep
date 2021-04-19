import FormikMuiTextField from "./FormikMuiTextField";
import { Grid, Typography } from "@material-ui/core";
import Registration from "../registration";

interface LastStepProps {
  registration: Registration;
}
const LastStep: React.FC<LastStepProps> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>
          Please review all your information before submitting:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <pre>{JSON.stringify(props.registration, null, 4)}</pre>
      </Grid>
    </Grid>
  );
};

export default LastStep;
