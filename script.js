document.getElementById('container').onchange = function() {
  var bill = parseFloat(document.getElementById('bill_total').value);
  //console.log(bill);
  var tip = parseFloat(document.getElementById('tip_input').value);
  //console.log(tip);
  var people = parseFloat(document.getElementById('split_input').value);
  //console.log(people);
  document.getElementById('tip').innerHTML = tip + "%";
  document.getElementById('people').innerHTML = people;
  var p_bill = ((bill /*+ (bill*tip/100)*/) / people);
  var p_tip = (bill*tip/100) / people;
  var p_total = p_bill + p_tip;
  if (bill > 0) {
    document.getElementById('person_bill').innerHTML = "$ " + p_bill.toFixed(2);
    document.getElementById('person_tip').innerHTML = "$ " + p_tip.toFixed(2);
    document.getElementById('person_total').innerHTML = "$ " + p_total.toFixed(2);
  }
  else {
    document.getElementById('person_bill').innerHTML = "";
    document.getElementById('person_tip').innerHTML = "";
    document.getElementById('person_total').innerHTML = "";/*
    document.getElementById('tip').innerHTML = tip + "%";
    document.getElementById('people').innerHTML = people;*/
  }
}
