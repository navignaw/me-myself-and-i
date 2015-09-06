/**
 * Helper functions to extend prototypes
 */

/* Capitalize first letter */
String.prototype.capitalize = function() {
  if (!this) {
    return this;
  }
  return this.charAt(0).toUpperCase() + this.slice(1);
};

/* Add separator between middle values of array */
Array.prototype.intersperse = function(separator) {
  if (this.length === 0) {
    return [];
  }

  return this.slice(1).reduce(function(xs, x, i) {
    return xs.concat([separator, x]);
  }, [this[0]]);
}
