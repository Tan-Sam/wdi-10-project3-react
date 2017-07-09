export const getClassNames = (colSize) => {

  getBootstrapColumns = (columnSize) => {
    return "col-xs-xx col-sm-xx col-md-xx col-lg-xx "
              .replace(/xx/g, colSize);
  }

  let classNames = "";
  if (elem === "X") {
    classNames += "clearValues ";
  }
  else if (elem === 0) {
    colSize *= 2;
  }
  else if (elem >== 10) {
    classNames += "2digits ";
  }

  classNames += this.getBootstrapColumns(colSize);

  //  set green tick for operation completed.
  // if(elem === `T`){
  //     elem = (<span className="glyphicon glyphicon-ok"></span>);
  // }

  return classNames;
}
