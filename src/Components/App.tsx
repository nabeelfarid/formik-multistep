import React from "react";
import { lightBlue } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Container,
  Tooltip,
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
  Card,
  CardContent,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FirstStep, SecondStep, LastStep } from ".";
import { Registration } from "../Models";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: lightBlue,
  },
});

function getSteps() {
  return [
    {
      label: "First Step",
      validationSchema: Yup.object({
        firstName: Yup.string().required().min(2).max(10),
        lastName: Yup.string().required().min(2).max(10),
      }),
    },
    {
      label: "Second Step",
      validationSchema: Yup.object({
        age: Yup.number().required().min(18).max(100),
        hobbies: Yup.string().required().min(2).max(20),
      }),
    },
    {
      label: "Third Step",
    },
  ];
}

function getStepContent(stepIndex: number, registration: Registration) {
  switch (stepIndex) {
    case 0:
      return <FirstStep registration={registration} />;
    case 1:
      return <SecondStep registration={registration} />;
    case 2:
      return <LastStep registration={registration} />;
    default:
      return "Unknown stepIndex";
  }
}

const initialValuesRegistration: Registration = {
  firstName: "",
  lastName: "",
  age: "",
  hobbies: "",
};

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isLastStep = (): boolean => {
    return activeStep === steps.length - 1;
  };

  const areAllStepsCompleted = (): boolean => {
    return activeStep === steps.length;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box minWidth={400}>
          <AppBar position="relative" color="default">
            <Toolbar>
              <Typography
                variant="h6"
                // style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Formik Multistep
              </Typography>
              <Box flexGrow={1} />
              <Tooltip title="Github Repo">
                <IconButton
                  aria-label="github"
                  href="https://github.com/nabeelfarid/formik-multistep"
                  target="blank"
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <Container>
            <Box mt={4}>
              <Card>
                <CardContent>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(({ label }) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {areAllStepsCompleted() ? (
                    <Box mt={1}>
                      <Typography gutterBottom>All steps completed</Typography>
                      <Box mt={2}>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                      </Box>
                    </Box>
                  ) : (
                    <>
                      <Formik
                        initialValues={initialValuesRegistration}
                        validationSchema={steps[activeStep].validationSchema}
                        onSubmit={async (values, helpers) => {
                          console.log(JSON.stringify(values, null, 2));
                          if (isLastStep()) {
                            await new Promise((r) => setTimeout(r, 3000));
                            helpers.setSubmitting(false);
                          }
                          handleNext();
                          helpers.setTouched({});
                        }}
                      >
                        {(props) => (
                          <Form autoComplete="off">
                            <Box mt={1}>
                              {getStepContent(activeStep, props.values)}
                            </Box>
                            <Box mt={2}>
                              <Box mr={2} component="span">
                                <Button
                                  disabled={
                                    activeStep === 0 || props.isSubmitting
                                  }
                                  onClick={handleBack}
                                  variant="outlined"
                                >
                                  Back
                                </Button>
                              </Box>
                              <Button
                                startIcon={
                                  props.isSubmitting && (
                                    <CircularProgress size="1rem" />
                                  )
                                }
                                disabled={props.isSubmitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                              >
                                {props.isSubmitting
                                  ? "Submitting"
                                  : isLastStep()
                                  ? "Finish"
                                  : "Next"}
                              </Button>
                            </Box>

                            {/* <pre>{JSON.stringify(props.errors, null, 4)}</pre>
                            <pre>{JSON.stringify(props.values, null, 4)}</pre> */}
                          </Form>
                        )}
                      </Formik>
                    </>
                  )}
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
