$(document).ready(function(){

  function Board(table) {
    var newBoard = this;
    newBoard.rows = [];
    $('tr', table).each(function(tableRow){
      var row = [];
      $('td', tableRow).each(function(tableCell){
      });
      newBoard.rows.push(row);
    });
  }

  $('.board').each(function(boardtable){
    var board = new Board(boardtable);
  });

});
