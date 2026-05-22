// Creación de un validador de manifiestos de carga

const normalizeUnits = (manifest) => {
  // Do not modify the original object; return a new object
  const result = { ...manifest };

  if (result.unit === "lb") {
    result.weight = result.weight * 0.45;
    result.unit = "kg";
  }

  return result;
};


const validateManifest = (manifest) => {
  // Do not modify the original object; return a new object describing missing/invalid fields
  const validation = {};

  // Validate containerId
  if (manifest.containerId === undefined) {
    validation.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    validation.containerId = "Invalid";
  }

  // Validate destination
  if (manifest.destination === undefined) {
    validation.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    validation.destination = "Invalid";
  }

  // Validate weight
  if (manifest.weight === undefined) {
    validation.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    validation.weight = "Invalid";
  }

  // Validate unit
  if (manifest.unit === undefined) {
    validation.unit = "Missing";
  } else if (
    typeof manifest.unit !== "string" ||
    !["kg", "lb"].includes(manifest.unit)
  ) {
    validation.unit = "Invalid";
  }

  // Validate hazmat
  if (manifest.hazmat === undefined) {
    validation.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validation.hazmat = "Invalid";
  }

  return validation;
};


const processManifest = (manifest) => {
  // Validate the manifest and log the appropriate messages
  const validationResult = validateManifest(manifest);

  // Check if the validation result is empty (valid manifest)
  if (Object.keys(validationResult).length === 0) {
    const normalizedManifest = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else { // Invalid manifest
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
};
