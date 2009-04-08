$(document).ready(function(){

  function Board(table) {
    var dumpObj = function(obj, indent) {
      indent = indent || ''
      if (typeof obj === 'object') {
        var retstring = "{\n";
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            retstring = retstring + indent + '  ' + key + ': ' + dumpObj(obj[key], indent + '  ') + "\n";
          }
        }
        retstring = retstring + indent + "}";
        return retstring;
      } else if (obj === undefined) {
        return "undefined";
      } else if (typeof obj === 'number') {
        return obj.toString();
      } else if (typeof obj === 'function') {
        return 'Function';
      } else {
        return "'" + obj.toString() + "'";
      }
    }
    var newBoard = this;
    newBoard.rows = [];
    $('tr', table).each(function(i, tableRow){
      var row = [];
      $('td', tableRow).each(function(j, tableCell){
        var cell = {
          val: parseInt($(tableCell).text(), 10) || undefined
        }
        row.push(cell);
      });
      newBoard.rows.push(row);
    });
    newBoard.debug = function(){
      $('body').append('<pre>' + dumpObj(newBoard) + '</pre>');
    }
    return newBoard;
  }

  $('.board').each(function(i, boardtable){
    var board = new Board(boardtable);
    // board.debug();
  });

});
