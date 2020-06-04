function getEnvVariable(varName) {
  if (process.env[varName] === undefined) {
    return undefined;
  }

  return process.env[varName];
}

exports.getEnvVariable = getEnvVariable;
