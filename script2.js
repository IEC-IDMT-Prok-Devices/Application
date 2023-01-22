tripTime = [];
PSMVal = [];
actualTripTime = [];
deviation = [];

$("#submitbtn").click(function () {
  const InjectIn = document.querySelector(".secur").value;
  const PS = document.querySelector(".PS").value;
  const In = document.querySelector("#In").value;
  const TMS = document.querySelector(".TMS").value;
  //1.3 IDMT***************************************
  if (document.querySelector("#IDMT").value == 1.3) {
    //Calculating PSM
    const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
    Y = Number(CalcPSM.toFixed(2));
    document.querySelector(".P").textContent = Y;

    if (Y >= 1.05) {
      $("#table1").append("<tr><td>" + Number($(".TMS").val()) + "</td></tr>");
      const calcT = (1.3 / (Math.log(Y) / Math.LN10)) * TMS;
      X = Number(calcT.toFixed(2));
      document.querySelector(".T").textContent = X;

      //Pushing values to array for garph plot
      tripTime.push(Number(document.querySelector(".T").textContent));
      PSMVal.push(Number(document.querySelector(".P").textContent));

      $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
      $("#table3").append("<tr><td>" + Number($(".P").text()) + "</td></tr>");
    } else {
      alert("psm value is below 1.05 , please increase the injected current");
    }
  }
  //IDMT  NI*******************************
  if (document.querySelector("#IDMT").value == "NI") {
    const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
    Y = Number(CalcPSM.toFixed(2));
    document.querySelector(".P").textContent = Y;

    if (Y >= 1.05) {
      $("#table1").append("<tr><td>" + Number($(".TMS").val()) + "</td></tr>");
      const calcT = (0.14 / (Math.pow(Y, 0.02) - 1)) * TMS; //NI
      X = Number(calcT.toFixed(2));
      document.querySelector(".T").textContent = X;

      tripTime.push(Number(document.querySelector(".T").textContent));
      PSMVal.push(Number(document.querySelector(".P").textContent));

      $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
      $("#table3").append("<tr><td>" + Number($(".P").text()) + "</td></tr>");
    } else {
      alert("psm value is below 1.05 , please increase the injected current");
    }
  }
  //IDMT 0.6sec***************
  if (document.querySelector("#IDMT").value == "0.6sec") {
    const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
    Y = Number(CalcPSM.toFixed(2));
    document.querySelector(".P").textContent = Y;

    if (Y >= 1.05) {
      $("#table1").append("<tr><td>" + Number($(".TMS").val()) + "</td></tr>");
      const calcT = (0.6 / (Math.log(Y) / Math.LN10)) * TMS; //0.6
      X = Number(calcT.toFixed(2));
      document.querySelector(".T").textContent = X;

      tripTime.push(Number(document.querySelector(".T").textContent));
      PSMVal.push(Number(document.querySelector(".P").textContent));

      $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
      $("#table3").append("<tr><td>" + Number($(".P").text()) + "</td></tr>");
    } else {
      alert("psm value is below 1.05 , please increase the injected current");
    }
  }
  //IDMT VI************************
  if (document.querySelector("#IDMT").value == "VI") {
    const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
    Y = Number(CalcPSM.toFixed(2));
    document.querySelector(".P").textContent = Y;

    if (Y >= 1.05) {
      $("#table1").append("<tr><td>" + Number($(".TMS").val()) + "</td></tr>");
      const calcT = (13.5 / (Y - 1)) * TMS; //VI
      X = Number(calcT.toFixed(2));
      document.querySelector(".T").textContent = X;

      tripTime.push(Number(document.querySelector(".T").textContent));
      PSMVal.push(Number(document.querySelector(".P").textContent));

      $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
      $("#table3").append("<tr><td>" + Number($(".P").text()) + "</td></tr>");
    } else {
      alert("psm value is below 1.05 , please increase the injected current");
    }
  }
  //IDMT EI
  if (document.querySelector("#IDMT").value == "EI") {
    const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
    Y = Number(CalcPSM.toFixed(2));
    document.querySelector(".P").textContent = Y;

    if (Y >= 1.05) {
      $("#table1").append("<tr><td>" + Number($(".TMS").val()) + "</td></tr>");
      const calcT = (80 / (Math.pow(Y, 2) - 1)) * TMS; //EI
      X = Number(calcT.toFixed(2));
      document.querySelector(".T").textContent = X;

      tripTime.push(Number(document.querySelector(".T").textContent));
      PSMVal.push(Number(document.querySelector(".P").textContent));

      $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
      $("#table3").append("<tr><td>" + Number($(".P").text()) + "</td></tr>");
    } else {
      alert("psm value is below 1.05 , please increase the injected current");
    }
  }
});

document.querySelector("#readarray").addEventListener("click", function () {
  curveGenerator();
});

$("#submitbtn").click(function () {});

document.querySelector("#actualTT").addEventListener("click", function () {
  actualTripTime.push(Number(document.querySelector(".triptimeActual").value));
  console.log(actualTripTime);
  $("#table4").append(
    "<tr><td>" + Number($(".triptimeActual").val()) + "</td></tr>"
  );
});

/*generate new manual curve*/
function curveGenerator() {
  for (let i = 0; i < actualTripTime.length; i++) {
    D = (((actualTripTime[i] - tripTime[i]) / tripTime[i]) * 100).toFixed(3);
    deviation.push(D);
    $("#table5").append("<tr><td>" + D + "</td></tr>");
  }
  //Generate graph
  $("#graph").highcharts({
    title: {
      text: "Ideal V/S Actual IDMT Curve",
    },
    xAxis: {
      categories: PSMVal,
    },
    yAxis: {
      title: {
        text: "<b>Trip Time</b>",
      },
      type: "logarithmic",
      minorTickInterval: 0.1,
      accessibility: {
        rangeDescription: "Range: 0.1 to 1000",
      },
      /* plotBands: {
            from: 0.3,
            to: 0.3,
            color: "#DF5353",
            thickness: "1%",
          },*/
    },
    series: [
      {
        name: "Ideal Trip Time",
        lineColor: "green",
        color: "black",
        data: tripTime,
      },
      {
        name: "Actual Trip Time",
        lineColor: "red",
        color: "black",
        data: actualTripTime,
        tooltip: {
          headerFormat: "<b>{point.x}</b>  ",
          pointFormatter: function () {
            return (
              this.series.name +
              ": " +
              this.y +
              "<br/>(" +
              (
                ((this.y - this.series.chart.series[0].data[this.x].y) /
                  this.series.chart.series[0].data[this.x].y) *
                100
              ).toFixed(3) +
              "%)"
            );
          },
        },
      },
    ],
  });
}

function removeActualTT() {
  $("#table4 tr:last").remove();
  actualTripTime.pop();
}

function removePSM_TT() {
  $("#table1 tr:last").remove();
  $("#table3 tr:last").remove();
  $("#table2 tr:last").remove();
  tripTime.pop();
  PSMVal.pop();
}
function Convert_HTML_To_PDF() {
  const element = document.getElementById("tabs");

  html2pdf().from(element).save();
}

document.querySelector("#export").addEventListener("click", function () {
  Convert_HTML_To_PDF();
});

((this.y - this.series.chart.series[0].data[this.x].y) /
  this.series.chart.series[0].data[this.x].y) *
  100;
