import {
  getAsyncLifecycle,
  createGlobalStore,
  fhir,
} from "@openmrs/esm-framework";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

createGlobalStore("patients", {
  patients: <fhir.Patient>[],
  notification: {},
});

const backendDependencies = {
  fhir2: "^1.2.0",
  "webservices.rest": "^2.2.0",
  reportingrest: "^1.0.0",
  reporting: "^1.0.0",
};

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-cohort-builder";

  const options = {
    featureName: "cohort-builder",
    moduleName,
  };

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import("./cohort-builder"), options),
        route: "cohort-builder",
      },
    ],
    extensions: [],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
