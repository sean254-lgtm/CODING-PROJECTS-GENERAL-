function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  if (normalizedManifest.unit === "lb") {
    normalizedManifest.weight = normalizedManifest.weight * 0.45;
  }

  normalizedManifest.unit = "kg";

  return normalizedManifest;
}

function validateManifest(manifest) {
  const errors = {};

  if (!Object.hasOwn(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!Object.hasOwn(manifest, "unit")) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validationResult = validateManifest(manifest);

  if (Object.keys(validationResult).length === 0) {
    const normalizedManifest = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
}

console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }));

console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));

console.log(validateManifest({}))

console.log(validateManifest({ containerId: null, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false } ));
