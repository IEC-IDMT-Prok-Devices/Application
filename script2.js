tripTime = [];
PSMVal = [];
actualTripTime = [];
deviation = [];
secInjCur = [0, 0];
// $(".T").hide();
// $(".P").hide();

$("#submitbtn").click(function () {
  const actsl = document.querySelector("#serialno").value;
  document.querySelector("#actslno").textContent = actsl;
  const InjectIn = document.querySelector(".secur").value;
  const PS = document.querySelector(".PS").value;
  const In = document.querySelector("#In").value;
  const TMS = document.querySelector(".TMS").value;
  if (
    Number(document.querySelector(".secur").value) >
    secInjCur[secInjCur.length - 1]
  ) {
    //1.3 IDMT***************************************
    if (document.querySelector("#IDMT").value == 1.3) {
      document.querySelector("#tableappearsbelow").textContent =
        "Curve Type : 1.3Sec";
      //Calculating PSM
      const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
      Y = Number(CalcPSM.toFixed(2));
      document.querySelector(".P").textContent = Y;

      if (Y >= 1.03 && Y <= 20) {
        const calcT = (1.3 / (Math.log(Y) / Math.LN10)) * TMS;
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
          // $("#table2").append(
          //   "<tr><td>" + Number($(".T").text()) + "</td></tr>"
          // );
          // $("#table3").append(
          //   "<tr><td>" + Number($(".P").text()) + "</td></tr>"
          // );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else if (Y > 20) {
        const calcT = (1.3 / (Math.log(20) / Math.LN10)) * TMS;
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else {
        alert("psm value is below 1.03 , please increase the injected current");
      }
    }
    //IDMT  NI*******************************
    if (document.querySelector("#IDMT").value == "NI") {
      document.querySelector("#tableappearsbelow").textContent =
        "Curve Type : NI";

      const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
      Y = Number(CalcPSM.toFixed(2));
      document.querySelector(".P").textContent = Y;

      if (Y >= 1.03 && Y <= 20) {
        const calcT = (0.14 / (Math.pow(Y, 0.02) - 1)) * TMS; //NI
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else if (Y > 20) {
        const calcT = (0.14 / (Math.pow(20, 0.02) - 1)) * TMS; //NI
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else {
        alert("psm value is below 1.03 , please increase the injected current");
      }
    }
    //IDMT 0.6sec***************
    if (document.querySelector("#IDMT").value == "0.6sec") {
      document.querySelector("#tableappearsbelow").textContent =
        "Curve Type : 0.6Sec";

      const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
      Y = Number(CalcPSM.toFixed(2));
      document.querySelector(".P").textContent = Y;

      if (Y >= 1.03 && Y <= 20) {
        const calcT = (0.6 / (Math.log(Y) / Math.LN10)) * TMS; //0.6
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else if (Y > 20) {
        const calcT = (0.6 / (Math.log(20) / Math.LN10)) * TMS; //0.6
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else {
        alert("psm value is below 1.03 , please increase the injected current");
      }
    }
    //IDMT VI************************
    if (document.querySelector("#IDMT").value == "VI") {
      document.querySelector("#tableappearsbelow").textContent =
        "Curve Type : VI";

      const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
      Y = Number(CalcPSM.toFixed(2));
      document.querySelector(".P").textContent = Y;

      if (Y >= 1.03 && Y <= 20) {
        const calcT = (13.5 / (Y - 1)) * TMS; //VI
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else if (Y > 20) {
        const calcT = (13.5 / (20 - 1)) * TMS; //VI
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else {
        alert("psm value is below 1.03 , please increase the injected current");
      }
    }
    //IDMT EI
    if (document.querySelector("#IDMT").value == "EI") {
      document.querySelector("#tableappearsbelow").textContent =
        "Curve Type : EI";

      const CalcPSM = Number(InjectIn) / (Number(PS) * Number(In));
      Y = Number(CalcPSM.toFixed(2));
      document.querySelector(".P").textContent = Y;

      if (Y >= 1.03 && Y <= 20) {
        const calcT = (80 / (Math.pow(Y, 2) - 1)) * TMS; //EI
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else if (Y > 20) {
        const calcT = (80 / (Math.pow(20, 2) - 1)) * TMS; //EI
        X = Number(calcT.toFixed(2));
        if (X > 0.03) {
          document.querySelector(".T").textContent = X;

          //Pushing values to array for garph plot
          tripTime.push(Number(document.querySelector(".T").textContent));
          PSMVal.push(Number(document.querySelector(".P").textContent));

          $("#table1").append(
            "<tr><td>" +
              Number($(".TMS").val()) +
              "</td><td>" +
              Number($(".P").text()) +
              "</td><td>" +
              Number($(".T").text()) +
              "</td></tr>"
          );
        } else {
          alert("you have reached minimum operating range of the relay");
        }
      } else {
        alert("psm value is below 1.03 , please increase the injected current");
      }
    }
  } else {
    alert("enter higher Secondary current");
  }
  secInjCur.push(document.querySelector(".secur").value);
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
    chart: {
      type: "line",
      zoomType: "y",
      panning: true,
      panKey: "shift",
    },
    series: [
      {
        name: "Ideal Trip Time",
        lineColor: "green",
        color: "green",
        data: tripTime,
      },
      {
        name: "Actual Trip Time",
        lineColor: "red",
        color: "red",
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
function Convert_HTML_To_PDF() {}

document.querySelector("#export").addEventListener("click", function () {
  const element = document.getElementById("tableandgraph");
  document.querySelector("#tableappearsbelow").style.color = "black";
  $("#export").remove();
  html2pdf(element, {
    jsPDF: { format: "a3" },
  });
});

//((this.y - this.series.chart.series[0].data[this.x].y) /
// this.series.chart.series[0].data[this.x].y) *
//100;

function removeAllTT() {
  newTMS = document.querySelector("#newTMS").value;
  tripTime.length = 0;
  for (var i = 1; i < table2.rows.length; ) {
    table2.deleteRow(i);
  }
  for (var i = 1; i < table1.rows.length; ) {
    table1.deleteRow(i);
  }
  for (let j = 0; j <= PSMVal.length - 1; j++) {
    const calcT = (1.3 / (Math.log(PSMVal[j]) / Math.LN10)) * newTMS;
    X = Number(calcT.toFixed(2));
    tripTime.push(X);
    $("#table2").append("<tr><td>" + X + "</td></tr>");
    $("#table1").append("<tr><td>" + newTMS + "</td></tr>");
  }
}

//****************************************************** */
tested13 = [
  89.37, 16.188, 6.3, 4.294, 3.394, 2.88, 2.555, 2.322, 2.003, 1.897, 1.806,
  1.728, 1.663, 1.6, 1.555, 1.504, 1.461, 1.429, 1.398, 1.364, 1.343, 1.309,
  1.295, 1.271, 1.247, 1.231, 1.209, 1.205, 1.187, 1.157,
];
function testReport13() {
  //**************************************************************1.3
  $("#table4").append("<tr><td>" + 89.37 + "</td></tr>");
  $("#table4").append("<tr><td>" + 16.188 + "</td></tr>");
  $("#table4").append("<tr><td>" + 6.301 + "</td></tr>");
  $("#table4").append("<tr><td>" + 4.329 + "</td></tr>");
  $("#table4").append("<tr><td>" + 3.394 + "</td></tr>");
  $("#table4").append("<tr><td>" + 2.881 + "</td></tr>");
  $("#table4").append("<tr><td>" + 2.555 + "</td></tr>");
  $("#table4").append("<tr><td>" + 2.322 + "</td></tr>");
  $("#table4").append("<tr><td>" + 2.003 + "</td></tr>"); //11
  $("#table4").append("<tr><td>" + 1.897 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.806 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.728 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.663 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.6 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.555 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.504 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.461 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.429 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.398 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.364 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.343 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.309 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.295 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.271 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.247 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.231 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.209 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.205 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.18 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.159 + "</td></tr>");

  for (let i = 0; i < tested13.length; i++) {
    D = (((tested13[i] - tripTime[i]) / tripTime[i]) * 100).toFixed(3);
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
    chart: {
      type: "line",
      zoomType: "y",
      panning: true,
      panKey: "shift",
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
        data: tested13,
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

EItested = [
  172.11, 49.5, 26.068, 16.421, 11.438, 8.481, 6.555, 5.229, 4.276, 3.563,
  3.014, 2.593, 2.244, 1.963, 1.736, 1.543, 1.385, 1.248, 1.129, 1.024, 0.938,
  0.86, 0.785, 0.735, 0.675, 0.628, 0.588, 0.547, 0.515, 0.475, 0.448, 0.423,
  0.4,
];

//********************************************EI */
function testReportEI() {
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
    chart: {
      type: "line",
      zoomType: "y",
      panning: true,
      panKey: "shift",
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
        data: EItested,
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

  $("#table4").append("<tr><td>" + 172.11 + "</td></tr>");
  $("#table4").append("<tr><td>" + 49.516 + "</td></tr>");
  $("#table4").append("<tr><td>" + 26.068 + "</td></tr>");
  $("#table4").append("<tr><td>" + 16.421 + "</td></tr>");
  $("#table4").append("<tr><td>" + 11.438 + "</td></tr>");
  $("#table4").append("<tr><td>" + 8.481 + "</td></tr>");
  $("#table4").append("<tr><td>" + 6.555 + "</td></tr>");
  $("#table4").append("<tr><td>" + 5.229 + "</td></tr>");
  $("#table4").append("<tr><td>" + 4.276 + "</td></tr>");
  $("#table4").append("<tr><td>" + 3.563 + "</td></tr>");
  $("#table4").append("<tr><td>" + 3.014 + "</td></tr>");
  $("#table4").append("<tr><td>" + 2.593 + "</td></tr>");
  $("#table4").append("<tr><td>" + 2.244 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.963 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.736 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.543 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.385 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.248 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.129 + "</td></tr>");
  $("#table4").append("<tr><td>" + 1.024 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.938 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.86 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.785 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.735 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.675 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.628 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.588 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.547 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.515 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.475 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.448 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.426 + "</td></tr>");
  $("#table4").append("<tr><td>" + 0.4 + "</td></tr>");

  for (let i = 0; i < EItested.length; i++) {
    D = (((EItested[i] - tripTime[i]) / tripTime[i]) * 100).toFixed(3);
    deviation.push(D);
    $("#table5").append("<tr><td>" + D + "</td></tr>");
  }
}

document.querySelector("#tested13").addEventListener("click", function () {
  testReport13();
});
document.querySelector("#EItested").addEventListener("click", function () {
  testReportEI();
});
