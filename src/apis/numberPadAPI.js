/*
 * Get classNames for css processing
 */
export const getClassNames = (colSize, elem) => {

  //  bootstrap grid columns class names
  const getBootstrapColumns = (columnSize) => {
    return "col-xs-xx col-sm-xx col-md-xx col-lg-xx h-100 "
              .replace(/xx/g, colSize);
  }

  //  bootstrap grid columns offset class names
  //  not working
  const getBootstrapColumnOffset = (offset) => {
    return "col-xs-offset-xx col-sm-offset-xx col-md-offset-xx col-lg-offset-xx h-100 "
              .replace(/xx/g, offset);
  }

  let classNames = "";
  if (elem === "X") {
    classNames += "clearValues "; // clear button ('X') formatting
  }
  else if (elem === 0) {
    colSize *= 2;   //  '0' occupies 2 columns. like actual keypad
  }
  else if (elem >= 10) {
    classNames += "2digits "; // center 10, 20 in div.
  }
  else if (elem === '.') {
    classNames += getBootstrapColumnOffset(2);
  }

  classNames += getBootstrapColumns(colSize);

  return classNames;
}
