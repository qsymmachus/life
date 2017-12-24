/** 
 * Helper function that returns a randomly generated boolean.
 * 
 * The optional "likelihood" parameter alters the odds that the
 * random boolean will in fact be 'true'. For example, a likelihood
 * of '70' means that there is a 70% likelihood that the boolean
 * will be true. Defaults to 50.
 */
export function randomBoolean(likelihood = 50) {
  return Math.random() >= ((100 - likelihood) / 100)
}
