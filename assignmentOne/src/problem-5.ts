const getProperty = <P, Q extends keyof P>(param1: P, param2: Q): P[Q] => {
  return param1[param2];
};
