let newarr = [];
let garphTitle = "1.3 curve";
let inputInterv = document.querySelector("#Interval").value;
$("#submitbtn").click(function () {
  if (
    document.querySelector(".PMS").value >= 1.3 &&
    document.querySelector(".PMS").value <= 40 &&
    document.querySelector(".TMS").value >= 0.01 &&
    document.querySelector(".TMS").value <= 1.6 &&
    document.querySelector("#IDMT").value == 1.3
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";

    const tms = document.querySelector(".TMS").value;
    const pms = document.querySelector(".PMS").value;

    const calcT = (1.3 / (Math.log(pms) / Math.LN10)) * tms;
    X = Number(calcT.toFixed(2));
    if (X < 0.03) {
      document.querySelector(".T").textContent = 0.03;
      alert("You have reached minimum operating range of the relay");
    } else {
      document.querySelector(".T").textContent = X;
    }

    $("#table1").append(
      "<tr><td>" +
        Number($(".TMS").val()) +
        "</td><td>" +
        Number($(".PMS").val()) +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");

    newarr.push(Number(document.querySelector(".T").textContent));
    console.log(newarr);
  } else if (
    document.querySelector(".PMS").value >= 1.3 &&
    document.querySelector(".PMS").value <= 40 &&
    document.querySelector(".TMS").value >= 0.01 &&
    document.querySelector(".TMS").value <= 1.6 &&
    document.querySelector("#IDMT").value == "NI"
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";

    const tms = document.querySelector(".TMS").value;
    const pms = document.querySelector(".PMS").value;

    const calcT = (0.14 / (Math.pow(pms, 0.02) - 1)) * tms;
    X = Number(calcT.toFixed(2));
    if (X < 0.03) {
      document.querySelector(".T").textContent = 0.03;
      alert("You have reached minimum operating range of the relay");
    } else {
      document.querySelector(".T").textContent = X;
    }

    $("#table1").append(
      "<tr><td>" +
        Number($(".TMS").val()) +
        "</td><td>" +
        Number($(".PMS").val()) +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");

    newarr.push(Number(document.querySelector(".T").textContent));
  } else if (
    document.querySelector(".PMS").value >= 1.3 &&
    document.querySelector(".PMS").value <= 40 &&
    document.querySelector(".TMS").value >= 0.01 &&
    document.querySelector(".TMS").value <= 1.6 &&
    document.querySelector("#IDMT").value == "0.6sec"
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6Sec";

    const tms = document.querySelector(".TMS").value;
    const pms = document.querySelector(".PMS").value;

    const calcT = (0.6 / (Math.log(pms) / Math.LN10)) * tms;
    X = Number(calcT.toFixed(2));
    if (X < 0.03) {
      document.querySelector(".T").textContent = 0.03;
      alert("You have reached minimum operating range of the relay");
    } else {
      document.querySelector(".T").textContent = X;
    }

    $("#table1").append(
      "<tr><td>" +
        Number($(".TMS").val()) +
        "</td><td>" +
        Number($(".PMS").val()) +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");

    newarr.push(Number(document.querySelector(".T").textContent));
  } else if (
    document.querySelector(".PMS").value >= 1.3 &&
    document.querySelector(".PMS").value <= 40 &&
    document.querySelector(".TMS").value >= 0.01 &&
    document.querySelector(".TMS").value <= 1.6 &&
    document.querySelector("#IDMT").value == "VI"
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    const tms = document.querySelector(".TMS").value;
    const pms = document.querySelector(".PMS").value;

    const calcT = (13.5 / (pms - 1)) * tms;
    X = Number(calcT.toFixed(2));
    if (X < 0.03) {
      document.querySelector(".T").textContent = 0.03;
      alert("You have reached minimum operating range of the relay");
    } else {
      document.querySelector(".T").textContent = X;
    }
    $("#table1").append(
      "<tr><td>" +
        Number($(".TMS").val()) +
        "</td><td>" +
        Number($(".PMS").val()) +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");

    newarr.push(Number(document.querySelector(".T").textContent));
  } else if (
    document.querySelector(".PMS").value >= 1.3 &&
    document.querySelector(".PMS").value <= 40 &&
    document.querySelector(".TMS").value >= 0.01 &&
    document.querySelector(".TMS").value <= 1.6 &&
    document.querySelector("#IDMT").value == "EI"
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    const tms = document.querySelector(".TMS").value;
    const pms = document.querySelector(".PMS").value;

    const calcT = (80 / (Math.pow(pms, 2) - 1)) * tms;
    X = Number(calcT.toFixed(2));
    if (X < 0.03) {
      document.querySelector(".T").textContent = 0.03;
      alert("You have reached minimum operating range of the relay");
    } else {
      document.querySelector(".T").textContent = X;
    }

    $("#table1").append(
      "<tr><td>" +
        Number($(".TMS").val()) +
        "</td><td>" +
        Number($(".PMS").val()) +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");

    newarr.push(Number(document.querySelector(".T").textContent));
  } else {
    alert("please check TSM and PSM range");
  }
});

//Single curve
document.querySelector("#readarray").addEventListener("click", function () {
  curveGenerator();
});

/*generate new manual curve*/
function curveGenerator() {
  //Generate graph
  $("#graph").highcharts({
    title: {
      text: "",
    },
    xAxis: {
      title: {
        text: "<b>PSM</b>",
      },
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "80",
        "100",
        "200",
        "300",
        "1000",
      ],
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
      plotBands: {
        from: 0.03,
        to: 0.03,
        color: "red",
        thickness: "5%",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
      },
    },
    chart: {
      type: "line",
      zoomType: "y",
      panning: true,
      panKey: "shift",
    },

    series: [
      {
        lineColor: "red",
        name: "",
        color: "black",
        data: newarr,
      },
      {
        lineColor: "rgba (255, 255, 255, 0)",
        name: "",
        color: "#ffffff",
        dataLabels: {
          enabled: false,
        },
        data: [
          0.03, 0.1, 0.04, 0.04, 0.04, 0.04, 0.04, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
          0.1, 0.1, 0.1, 0.1, 0.1, 100,
        ],
      },
    ],
  });
}
/* Generate new auto Curve Single ----------------------*************/
function autoCurveGenerator() {
  //Generate graph
  $("#graph").highcharts({
    xAxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "80",
        "100",
        "200",
        "300",
        "1000",
        "10000",
      ],
    },
    title: {
      text: "",
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
    plotOptions: {
      series: {
        enableMouseTracking: false,
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 1,
        },
      },
    },
    chart: {
      type: "line",
      zoomType: "y",
      panning: true,
      panKey: "shift",
    },

    series: [
      {
        lineColor: "red",
        name: "",
        color: "black",
        title: "hi",
        data: autoGenCurve,
      },

      {
        lineColor: "White",
        name: "",
        color: "#ffffff",
        dataLabels: {
          enabled: false,
        },
        data: [
          0.1, 0.02, 0.03, 0.04, 0.05, 0.06, 0.08, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
          0.1, 0.1, 0.1, 0.1, 0.1, 100,
        ],
      },
    ],
  });
}
//****************************1.3 FUNCTONS STARTS HERE******************* */
/*1.3 Curve interval 1*/
const intvr = document.querySelector("#Interval").value;
const iter = document.querySelector("#iterations").value;
let autoGenCurve = [];
let newarr2 = [];
function onePointThreeInt1_20() {
  for (let i = 1.1; i <= 20; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//1.3 curve 10 iterations
function onePointThreeInt1_10() {
  for (let i = 1.1; i <= 10; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//1.3 curve 15 iterations
function onePointThreeInt1_15() {
  for (let i = 1.1; i <= 15; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*1.3 Curve Interval 2 , 20 iterations*/
function onePointThreeInt2_20() {
  for (let i = 1.1; i <= 40; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//1.3 curve interval 2 , 10 iterations
function onePointThreeInt2_10() {
  for (let i = 1.1; i <= 20; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//1.3 curve interval 2 , 15 iterations
function onePointThreeInt2_15() {
  for (let i = 1.1; i <= 30; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*1.3 Curve Interval 1.5 , iterations 20*/
function onePointThreeInt15_20() {
  for (let i = 1.1; i <= 30; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*1.3 Curve Interval 1.5 , iterations 10*/
function onePointThreeInt15_10() {
  for (let i = 1.1; i <= 15; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*1.3 Curve Interval 1.5 , iterations 15*/
function onePointThreeInt15_15() {
  for (let i = 1.1; i <= 22.5; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*1.3 Curve Interval 2.5 , iterations 20*/
function onePointThreeInt25_20() {
  for (let i = 1.5; i < 50; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*1.3 Curve Interval 2.5 , iterations 10*/
function onePointThreeInt25_10() {
  for (let i = 1.5; i < 25; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*1.3 Curve Interval 2.5 , iterations 15*/
function onePointThreeInt25_15() {
  for (let i = 1.5; i < 37.5; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (1.3 / (Math.log(newarr2[x]) / Math.LN10)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//****************************1.3 FUNCTIONS ENDS HERE******************* */

//****************************NI FUNCTONS STARTS HERE******************* */
/*NI Curve interval 1 , iterations 20*/
function NI1_20() {
  for (let i = 1.1; i <= 20; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//NI curve interval 1 , 10 iterations
function NI1_10() {
  for (let i = 1.1; i <= 10; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//NI curve interval 1 , 15 iterations
function NI1_15() {
  for (let i = 1.1; i <= 15; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*NI Curve Interval 2 , 20 iterations*/
function NI2_20() {
  for (let i = 1.1; i <= 40; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//NI curve interval 2 , 10 iterations
function NI2_10() {
  for (let i = 1.1; i <= 20; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//NI curve interval 2 , 15 iterations
function NI2_15() {
  for (let i = 1.1; i <= 30; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*NI Curve Interval 1.5 , iterations 20*/
function NI15_20() {
  for (let i = 1.1; i <= 30; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*NI Curve Interval 1.5 , iterations 10*/
function NI15_10() {
  for (let i = 1.1; i <= 15; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*NI Curve Interval 1.5 , iterations 15*/
function NI15_15() {
  for (let i = 1.1; i <= 22.5; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*NI Curve Interval 2.5 , iterations 20*/
function NI25_20() {
  for (let i = 1.5; i < 50; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*NI Curve Interval 2.5 , iterations 10*/
function NI25_10() {
  for (let i = 1.5; i < 25; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*NI Curve Interval 2.5 , iterations 15*/
function NI25_15() {
  for (let i = 1.5; i < 37.5; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.14 / (Math.pow(Number(newarr2[x]), 0.02) - 1)) * 1; //NI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//****************************NI FUNCTIONS ENDS HERE******************* */

//****************************0.6 FUNCTONS STARTS HERE******************* */
/*0.6 Curve interval 1 , iterations 20*/
function zeropointsix1_20() {
  for (let i = 1.1; i <= 20; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//0.6 curve interval 1 , 10 iterations
function zeropointsix1_10() {
  for (let i = 1.1; i <= 10; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//0.6 curve interval 1 , 15 iterations
function zeropointsix1_15() {
  for (let i = 1.1; i <= 15; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*0.6 Curve Interval 2 , 20 iterations*/
function zeropointsix2_20() {
  for (let i = 1.1; i <= 40; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//0.6 curve interval 2 , 10 iterations
function zeropointsix2_10() {
  for (let i = 1.1; i <= 20; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//0.6 curve interval 2 , 15 iterations
function zeropointsix2_15() {
  for (let i = 1.1; i <= 30; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*0.6 Curve Interval 1.5 , iterations 20*/
function zeropointsix15_20() {
  for (let i = 1.1; i <= 30; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*0.6 Curve Interval 1.5 , iterations 10*/
function zeropointsix15_10() {
  for (let i = 1.1; i <= 15; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*0.6 Curve Interval 1.5 , iterations 15*/
function zeropointsix15_15() {
  for (let i = 1.1; i <= 22.5; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*0.6 Curve Interval 2.5 , iterations 20*/
function zeropointsix25_20() {
  for (let i = 1.5; i < 50; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*0.6 Curve Interval 2.5 , iterations 10*/
function zeropointsix25_10_10() {
  for (let i = 1.5; i < 25; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*0.6 Curve Interval 2.5 , iterations 15*/
function zeropointsix25_15() {
  for (let i = 1.5; i < 37.5; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (0.6 / (Math.log(newarr2[x]) / Math.LN10)) * 1; //0.6
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//****************************0.6 FUNCTIONS ENDS HERE******************* */

//****************************VI FUNCTONS STARTS HERE******************* */
/*VI Curve interval 1 , iterations 20*/
function VI1_20() {
  for (let i = 1.1; i <= 20; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><<td>" +
        Number($(".T").text()) +
        "</td>/tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//VI curve interval 1 , 10 iterations
function VI1_10() {
  for (let i = 1.1; i <= 10; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//VI curve interval 1 , 15 iterations
function VI1_15() {
  for (let i = 1.1; i <= 15; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*VI Curve Interval 2 , 20 iterations*/
function VI2_20() {
  for (let i = 1.1; i <= 40; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//VI curve interval 2 , 10 iterations
function VI2_10() {
  for (let i = 1.1; i <= 20; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//VI curve interval 2 , 15 iterations
function VI2_15() {
  for (let i = 1.1; i <= 30; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*VI Curve Interval 1.5 , iterations 20*/
function VI15_20() {
  for (let i = 1.1; i <= 30; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*VI Curve Interval 1.5 , iterations 10*/
function VI15_10() {
  for (let i = 1.1; i <= 15; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*VI Curve Interval 1.5 , iterations 15*/
function VI15_15() {
  for (let i = 1.1; i <= 22.5; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*VI Curve Interval 2.5 , iterations 20*/
function VI25_20() {
  for (let i = 1.5; i < 50; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*VI Curve Interval 2.5 , iterations 10*/
function VI25_10_10() {
  for (let i = 1.5; i < 25; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*VI Curve Interval 2.5 , iterations 15*/
function VI25_15() {
  for (let i = 1.5; i < 37.5; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (13.5 / (newarr2[x] - 1)) * 1; //VI
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//****************************VI FUNCTIONS ENDS HERE******************* */

//****************************EI FUNCTONS STARTS HERE******************* */
/*EI Curve interval 1 , iterations 20*/
function EI1_20() {
  for (let i = 1.1; i <= 20; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//EI curve interval 1 , 10 iterations
function EI1_10() {
  for (let i = 1.1; i <= 10; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//EI curve interval 1 , 15 iterations
function EI1_15() {
  for (let i = 1.1; i <= 15; i++) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*EI Curve Interval 2 , 20 iterations*/
function EI2_20() {
  for (let i = 1.1; i <= 40; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//EI curve interval 2 , 10 iterations
function EI2_10() {
  for (let i = 1.1; i <= 20; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//EI curve interval 2 , 15 iterations
function EI2_15() {
  for (let i = 1.1; i <= 30; i += 2) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}

/*EI Curve Interval 1.5 , iterations 20*/
function EI15_20() {
  for (let i = 1.1; i <= 30; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*EI Curve Interval 1.5 , iterations 10*/
function EI15_10() {
  for (let i = 1.1; i <= 15; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*EI Curve Interval 1.5 , iterations 15*/
function EI15_15() {
  for (let i = 1.1; i <= 22.5; i += 1.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*EI Curve Interval 2.5 , iterations 20*/
function EI25_20() {
  for (let i = 1.5; i < 50; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*EI Curve Interval 2.5 , iterations 10*/
function EI25_10_10() {
  for (let i = 1.5; i < 25; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
/*EI Curve Interval 2.5 , iterations 15*/
function EI25_15() {
  for (let i = 1.5; i < 37.5; i += 2.5) {
    sum = 0;
    sum = sum + i;
    newarr2.push(sum);
  }
  for (let x = 0; x < newarr2.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr2[x]), 2) - 1)) * 1;
    X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr2[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    autoGenCurve.push(X);
  }
}
//****************************EI FUNCTIONS ENDS HERE******************* */

/* Generate curve by picking interval and iterations */
document.querySelector("#AutoGraph").addEventListener("click", function () {
  //***************1.3 STARTS HERE*************/
  if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt1_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt1_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt1_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt2_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt2_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt2_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt15_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt15_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt15_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt25_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt25_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == 1.3 &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 1.3Sec";
    onePointThreeInt25_15();
    autoCurveGenerator();
  }
  //***************1.3 ENDS HERE*************/
  //***************NI STARTS HERE************/
  else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI1_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI1_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI1_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI2_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 15
  ) {
    NI2_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI2_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI15_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI15_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI15_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI25_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI25_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "NI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : NI";
    NI25_15();
    autoCurveGenerator();
  }
  //***************NI ENDS HERE*************/

  //***************VI STARTS HERE************/
  else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI1_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI1_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI1_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI2_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI2_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI2_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI15_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI15_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI15_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI25_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI25_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "VI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : VI";
    VI25_15();
    autoCurveGenerator();
  }
  //**************VI ENDS HERE*************/

  //***************zeropointsix STARTS HERE************/
  else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix1_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix1_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix1_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix2_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix2_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix2_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix15_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 10
  ) {
    zeropointsix15_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix15_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix25_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix25_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "0.6sec" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : 0.6sec";
    zeropointsix25_15();
    autoCurveGenerator();
  }
  //**************zeropointsix ENDS HERE*************/

  //***************VI STARTS HERE************/
  else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI1_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI1_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 15
  ) {
    EI1_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI2_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI2_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI2_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI15_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI15_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 1.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI15_15();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 20
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI25_20();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 10
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI25_10();
    autoCurveGenerator();
  } else if (
    document.querySelector("#Interval").value == 2.5 &&
    document.querySelector("#IDMT_Auto_Generate").value == "EI" &&
    document.querySelector("#iterations").value == 15
  ) {
    document.querySelector("#tableappearsbelow").textContent =
      "Curve Type : EI";
    EI25_15();
    autoCurveGenerator();
  }
  //**************EI ENDS HERE*************/
  else {
    alert("Select IDMT Curve Type , Steps ,No of iterations");
  }
});

//------------------------------------------------------------------//
//Generate all curve//
let onePointThree = [];
let zeroPointSix = [];
let VI = [];
let EI = [];
function autoCurveGeneratorAll() {
  //Generate graph
  $("#graph").highcharts({
    title: {
      text: "IDMT Curve 1.3 V/S 0.6 V/S VI V/S EI",
    },
    xAxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "80",
        "100",
        "200",
        "300",
        "1000",
      ],
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
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
      },
    },
    plotOptions: {
      series: {
        enableMouseTracking: false,
      },
    },
    chart: {
      type: "line",
      zoomType: "y",
      panning: false,
      panKey: "shift",
    },

    series: [
      {
        lineColor: "White",
        name: "",
        color: "#ffffff",
        data: [
          0.1, 0.02, 0.03, 0.04, 0.05, 0.06, 0.08, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
          0.1, 0.1, 0.1, 0.1, 0.1, 100,
        ],
      },
      {
        lineColor: "purple",
        name: "1.3",
        color: "purple",
        data: onePointThree,
      },
      {
        lineColor: "red",
        name: "0.6",
        color: "red",
        data: zeroPointSix,
      },
      {
        lineColor: "green",
        name: "VI",
        color: "green",
        data: VI,
      },
      {
        lineColor: "Black",
        name: "EI",
        color: "#fff000",
        data: EI,
      },
    ],
  });
}
/*1.3 Curve interval 1*/
const intvrAll = document.querySelector("#Interval").value;
const iterAll = document.querySelector("#iterations").value;
let newarr21 = [];
let newarr22 = [];
let newarr23 = [];
let newarr24 = [];
function onePointThreeInt1All() {
  for (let i = 1.1; i < 15; i++) {
    sum = 0;
    sum = sum + i;
    newarr21.push(sum);
  }
  for (let x = 0; x < newarr21.length; x++) {
    const calcT = (1.3 / (Math.log(newarr21[x]) / Math.LN10)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;
    $("#table1").append(
      "<tr><td>" + 1 + "</td><td>" + newarr21[x] + "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    onePointThree.push(X);
  }
}

/*1.3 Curve Interval 2*/
function zeropointsix2All() {
  for (let i = 1.1; i < 15; i += 1) {
    sum = 0;
    sum = sum + i;
    newarr22.push(sum);
  }
  for (let x = 0; x < newarr22.length; x++) {
    const calcT = (0.6 / (Math.log(newarr22[x]) / Math.LN10)) * 1; //0.6
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr22[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    zeroPointSix.push(X);
  }
}
/*1.3 Curve Interval 1.5*/
function VIAll() {
  for (let i = 1.1; i < 15; i += 1) {
    sum = 0;
    sum = sum + i;
    newarr23.push(sum);
  }
  for (let x = 0; x < newarr23.length; x++) {
    const calcT = (13.5 / (newarr23[x] - 1)) * 1; //VI
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr23[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    VI.push(X);
  }
}
/*1.3 Curve Interval 2.5*/
function EIAll() {
  for (let i = 1.1; i <= 15; i += 1) {
    sum = 0;
    sum = sum + i;
    newarr24.push(sum);
  }
  for (let x = 0; x < newarr24.length; x++) {
    const calcT = (80 / (Math.pow(Number(newarr24[x]), 2) - 1)) * 1;
    let X = Number(calcT.toFixed(2));
    document.querySelector(".T").textContent = X;

    $("#table1").append(
      "<tr><td>" +
        1 +
        "</td><td>" +
        newarr24[x] +
        "</td><td>" +
        Number($(".T").text()) +
        "</td></tr>"
    );
    $("#table2").append("<tr><td>" + Number($(".T").text()) + "</td></tr>");
    EI.push(X);
  }
}

//To genet=rate all curves*****************
document.querySelector("#AutoGraphAll").addEventListener("click", function () {
  onePointThreeInt1All();
  zeropointsix2All();
  VIAll();
  EIAll();
  autoCurveGeneratorAll();
  document.getElementById("export").style.display = "none";
  $("#table1").remove();
});

//To delete last row
document.querySelector("#removerow").addEventListener("click", function () {
  $("#table1 tr:last").remove();
  $("#table2 tr:last").remove();
  newarr.pop();
});

//export
function Convert_HTML_To_PDF() {
  const element = document.getElementById("graphandtable");
  document.querySelector("#tableappearsbelow").style.color = "black";
  $("#export").remove();
  html2pdf().from(element).save();
}

document.querySelector("#export").addEventListener("click", function () {
  const element = document.getElementById("graphandtable");
  document.querySelector("#tableappearsbelow").style.color = "black";
  $("#export").remove();

  html2pdf(element, {
    jsPDF: { format: "a3" },
  });
});

/**************************************SECOND REQUIREMENT****************** */
