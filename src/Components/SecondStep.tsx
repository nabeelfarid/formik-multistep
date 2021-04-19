import FormikMuiTextField from "./FormikMuiTextField";
import { Grid } from "@material-ui/core";
import Registration from "../registration";

interface SecondStepProps {
  registration: Registration;
}
const SecondStep: React.FC<SecondStepProps> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormikMuiTextField
          name="age"
          label="Age"
          variant="outlined"
          fullWidth
          type="number"
        />
      </Grid>
      <Grid item xs={12}>
        <FormikMuiTextField
          name="hobbies"
          label="Hobbies"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default SecondStep;
