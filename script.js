"use strict";
$(() => {
  const reservations = [];
  let currentTable = null;

  for (let i = 0; i < 9; i++) {
    $("#table").append(`<div class="tabledivs available ${i}">${(i+1)}</div>`);
  }

  $("body").on("click", "#table div.available", (e) => {
    $("#seatform").show();
    console.log(e.target);
    $("#seatform #seatforminfo form p").text(`Table Number: ${$(e.target).text()}`);
    currentTable = $(e.target);
  });

  $("body").on("click", "#seatforminfo img:first, #seatforminfo button:first", (e) => {
    $("#seatform").hide();
    if (e.target.tagName === "BUTTON") {
      // console.log(currentTable);
      currentTable
        .removeClass("available")
        .addClass("reserved");
      reservations.push(new reservation($("#name").val(), $("#number").val(), $("#size").val(), currentTable.text()));
      // reservations[currentTable[0].classList[1]] = {
      //   name: $("#name").val(),
      //   phone: $("#number").val(),
      //   size: $("#size").val()
      console.log(reservations)
      // }
      // console.log(reservations);
      // console.log(reservations[currentTable[0].classList[1]])
    }
  });

  $("body").on("mouseenter mouseleave", "#table div.reserved", (e) => {
    $(e.target).css("cursor", "not-allowed");
    $(".box").show("slow");
    
  });
  $("body").on("mouseleave", "#table div.reserved", (e) => {
    $(".box").hide();
  });

  $("body").on("mouseenter", "#table div.reserved", (e) => {
    for (let i =0; i <reservations.length; i++){
     if ($(e.target).text() === reservations[i].table){
     $(".box").text(`Name: ${reservations[i].name} Phone: ${reservations[i].number} Size: ${reservations[i].party}`) 
    }}
    
  })

  class reservation {
    constructor (name, number, party, table) {
      this.name = name;
      this.number = number;
      this.party =party;
      this.table =table;
    }
  }
});