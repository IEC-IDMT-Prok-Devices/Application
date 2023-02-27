//Variable declations
const product = document.querySelector("#Product").value;
//const psm = document.querySelector("#PSM").value;
//const tms = document.querySelector("#TMS").value;
//const idmt = document.querySelector("#IDMT").value;
let tms1 = [];
let tms2 = [];
let tms11 = [];
let tms01 = [];
let tms001 = [];
let PSMVal = [2, 5, 10, 15, 20];

$("#submitbtn").click(function () {
  if (document.querySelector("#IDMT").value == 1.3) {
    document.querySelector("#CurveName").textContent = "Curve Type : 1.3 sec";
    let tmsAll = [];
    tmsAll = $("#TMS").val();

    for (let t = 0; t < tmsAll.length; t++) {
      const t1ms = tmsAll[t];
      for (let r = 0; r < PSMVal.length; r++) {
        let pms = PSMVal[r];
        const calcT = (1.3 / (Math.log(pms) / Math.LN10)) * t1ms;
        X = Number(calcT.toFixed(2));
        if (X < 0.03) {
          document.querySelector("#T").textContent = 0.03;
          console.log("You have reached minimum operating range of the relay");
        } else {
          document.querySelector("#T").textContent = X;
        }

        $("#table1").append(
          "<tr><td>" +
            t1ms +
            "</td><td>" +
            pms +
            "</td><td>" +
            Number($("#T").text()) +
            "</td></tr>"
        );

        if (tmsAll[t] == "1") {
          tms1.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "1.1") {
          tms11.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.1") {
          tms01.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.01") {
          tms001.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "2") {
          tms2.push(Number(document.querySelector("#T").textContent));
        }
      }
    }
  } else if (document.querySelector("#IDMT").value == "NI") {
    document.querySelector("#CurveName").textContent =
      "Curve Type : Normal nverse";
    let tmsAll = [];
    tmsAll = $("#TMS").val();

    for (let t = 0; t < tmsAll.length; t++) {
      const t1ms = tmsAll[t];
      for (let r = 0; r < PSMVal.length; r++) {
        let pms = PSMVal[r];
        const calcT = (0.14 / (Math.pow(pms, 0.02) - 1)) * t1ms; //NI
        X = Number(calcT.toFixed(2));
        if (X < 0.03) {
          document.querySelector("#T").textContent = 0.03;
          console.log("You have reached minimum operating range of the relay");
        } else {
          document.querySelector("#T").textContent = X;
        }

        $("#table1").append(
          "<tr><td>" +
            t1ms +
            "</td><td>" +
            pms +
            "</td><td>" +
            Number($("#T").text()) +
            "</td></tr>"
        );

        if (tmsAll[t] == "1") {
          tms1.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "1.1") {
          tms11.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.1") {
          tms01.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.01") {
          tms001.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "2") {
          tms2.push(Number(document.querySelector("#T").textContent));
        }
      }
    }
  } else if (document.querySelector("#IDMT").value == "VI") {
    document.querySelector("#CurveName").textContent =
      "Curve Type : Very Inverse";
    let tmsAll = [];
    tmsAll = $("#TMS").val();

    for (let t = 0; t < tmsAll.length; t++) {
      const t1ms = tmsAll[t];
      for (let r = 0; r < PSMVal.length; r++) {
        let pms = PSMVal[r];
        const calcT = (13.5 / (pms - 1)) * t1ms; //VI

        X = Number(calcT.toFixed(2));
        if (X < 0.03) {
          document.querySelector("#T").textContent = 0.03;
          console.log("You have reached minimum operating range of the relay");
        } else {
          document.querySelector("#T").textContent = X;
        }

        $("#table1").append(
          "<tr><td>" +
            t1ms +
            "</td><td>" +
            pms +
            "</td><td>" +
            Number($("#T").text()) +
            "</td></tr>"
        );

        if (tmsAll[t] == "1") {
          tms1.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "1.1") {
          tms11.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.1") {
          tms01.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.01") {
          tms001.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "2") {
          tms2.push(Number(document.querySelector("#T").textContent));
        }
      }
    }
  } else if (document.querySelector("#IDMT").value == "EI") {
    document.querySelector("#CurveName").textContent =
      "Curve Type : Extremely Inverse";
    let tmsAll = [];
    tmsAll = $("#TMS").val();

    for (let t = 0; t < tmsAll.length; t++) {
      const t1ms = tmsAll[t];
      for (let r = 0; r < PSMVal.length; r++) {
        let pms = PSMVal[r];
        const calcT = (80 / (Math.pow(pms, 2) - 1)) * t1ms; //EI
        X = Number(calcT.toFixed(2));
        if (X < 0.03) {
          document.querySelector("#T").textContent = 0.03;
          console.log("You have reached minimum operating range of the relay");
        } else {
          document.querySelector("#T").textContent = X;
        }

        $("#table1").append(
          "<tr><td>" +
            t1ms +
            "</td><td>" +
            pms +
            "</td><td>" +
            Number($("#T").text()) +
            "</td></tr>"
        );

        if (tmsAll[t] == "1") {
          tms1.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "1.1") {
          tms11.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.1") {
          tms01.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.01") {
          tms001.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "2") {
          tms2.push(Number(document.querySelector("#T").textContent));
        }
      }
    }
  } else if (document.querySelector("#IDMT").value == "0.6") {
    document.querySelector("#CurveName").textContent = "Curve Type : 0.6 Sec";
    let tmsAll = [];
    tmsAll = $("#TMS").val();

    for (let t = 0; t < tmsAll.length; t++) {
      const t1ms = tmsAll[t];
      for (let r = 0; r < PSMVal.length; r++) {
        let pms = PSMVal[r];
        const calcT = (0.6 / (Math.log(pms) / Math.LN10)) * t1ms; //0.6
        X = Number(calcT.toFixed(2));
        if (X < 0.03) {
          document.querySelector("#T").textContent = 0.03;
          console.log("You have reached minimum operating range of the relay");
        } else {
          document.querySelector("#T").textContent = X;
        }

        $("#table1").append(
          "<tr><td>" +
            t1ms +
            "</td><td>" +
            pms +
            "</td><td>" +
            Number($("#T").text()) +
            "</td></tr>"
        );

        if (tmsAll[t] == "1") {
          tms1.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "1.1") {
          tms11.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.1") {
          tms01.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "0.01") {
          tms001.push(Number(document.querySelector("#T").textContent));
        } else if (tmsAll[t] == "2") {
          tms2.push(Number(document.querySelector("#T").textContent));
        }
      }
    }
  } else {
    return;
  }
});

document.querySelector("#readarray").addEventListener("click", function () {
  curveGenerator();
});

function curveGenerator() {
  //Generate graph
  $("#graph").highcharts({
    title: {
      text: "",
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
        name: "TMS 1",
        lineColor: "green",
        color: "green",
        data: tms1,
      },
      {
        name: "TMS 1.1",
        lineColor: "blue",
        color: "blue",
        data: tms11,
      },
      {
        name: "TMS 0.1",
        lineColor: "red",
        color: "red",
        data: tms01,
      },
      {
        name: "TMS 0.01",
        lineColor: "yellow",
        color: "yellow",
        data: tms001,
      },
      {
        name: "TMS 2",
        lineColor: "purple",
        color: "purple",
        data: tms2,
      },
    ],
  });
}

function Convert_HTML_To_PDF() {
  const element = document.getElementById("fullPage");
  //document.getElementById("Product").style.display = "none";
  $("#Product").remove();
  //$("#Product").remove();

  //document.getElementById("Product").style.borderColor = "red";
  $("#IDMT").remove();
  //document.getElementById("TMS").style.display = "none";
  $("#TMS").remove();
  //document.getElementById("submitbtn").style.display = "none";
  $("#submitbtn").remove();
  //document.getElementById("readarray").style.display = "none";
  $("#readarray").remove();
  //document.getElementById("removerow").style.display = "none";
  $("#removerow").remove();
  //document.getElementById("export").style.display = "none";
  $("#export").remove();
  //document.getElementById("T").style.display = "none";
  $("#T").remove();
  //document.getElementById("labelselect").style.display = "none";
  $("#labelselect").remove();
  //$("#navbar").remove();
  $("#CurveName").show();
  //$("#header").show();
  $("#reporttop").show();
  $("#report").show();
  $("#line1").show();
  $("#line2").show();
  $("#relayname").show();
  $("#report3").show();
  $("#line3").show();
  $("#line4").show();

  document.getElementById("CurveName").style.marginTop = "40px";
  //document.getElementById("graph").style.marginTop = "90px";

  document.getElementById("table1").style.marginTop = "0px";
  $("#tableoutput").remove();
  $(".bootstrap-select").remove();
  html2pdf(element, {
    jsPDF: { format: "a2" },
  });
}

function fun1() {
  saveAsExcel("table1", "table.xls");
  Convert_HTML_To_PDF();
}

$(window).ready(function () {
  $("#relayname").hide();
  $("#reporttop").hide();
  $("#report").hide();
  $("#line1").hide();
  $("#line2").hide();
  $("#productIMG").show();
  $("#report3").hide();
  $("#line3").hide();
  $("#line4").hide();
});
