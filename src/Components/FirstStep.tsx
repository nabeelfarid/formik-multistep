import FormikMuiTextField from "./FormikMuiTextField";
import { Grid } from "@material-ui/core";
import { Registration } from "../Models";

interface FirstStepProps {
  registration: Registration;
}
const FirstStep: React.FC<FirstStepProps> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormikMuiTextField
          name="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <FormikMuiTextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default FirstStep;
