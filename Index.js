
// ------------we get the variables for graphique n° 1---------------------------------------------------------------------------------

var table1 = document.querySelector("#table1");
var tbody = table1.getElementsByTagName("tbody")[0];
var row = tbody.getElementsByTagName("tr")[1];
var column = row.getElementsByTagName("td")[0];
var years = row.getElementsByTagName("th")[1];
var table_val = [];
var table_country = [];
var table_year = [];

// ------we get the values for table_val -----------

for (r = 1; r < tbody.getElementsByTagName("tr").length; r++) {
  table_val[r] = new Array();

  for (i = 1; i < row.getElementsByTagName("td").length; i++) {
    table_val[r].push(
      parseInt(
        tbody.getElementsByTagName("tr")[r].getElementsByTagName("td")[i]
          .innerHTML
      )
    );
  }
}
// ------we get the values for table_country----------

for (r = 1; r < tbody.getElementsByTagName("tr").length; r++) {
  table_country.push(
    tbody.getElementsByTagName("tr")[r].getElementsByTagName("td")[0].innerHTML
  );
}

// -------we get the values for table_year-----------

var rowTitle = document.getElementsByTagName("tr")[1];
var ligne = rowTitle.getElementsByTagName("th")[0];

for (r = 2; r < rowTitle.getElementsByTagName("th").length; r++) {
  table_year.push(rowTitle.getElementsByTagName("th")[r].innerHTML);
}

// --------------we create the canvas ------------------------

var canvas = document.createElement("canvas");
canvas.setAttribute("id", "graph");
canvas.setAttribute("width", "auto");
canvas.setAttribute("height", "150");
table1.before(canvas);





// ------------------------- graphique n° 1 charts.js ------------------------------------

const ctx = document.getElementById("graph");

const myChart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: table_year,
    datasets: [
      {
        label: table_country[0],
        data: table_val[1],
        backgroundColor: ["rgba(229, 37, 37, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        hidden: false,
      },
      {
        label: table_country[1],
        data: table_val[2],
        backgroundColor: ["rgba(187, 143, 206, 0.7)"],
        borderColor: ["rgba(187, 143, 206, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[2],
        data: table_val[3],
        backgroundColor: ["rgba(133, 193, 233, 0.7)"],
        borderColor: ["rgba(133, 193, 233, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[3],
        data: table_val[4],
        backgroundColor: ["rgba(130, 224, 170, 0.7)"],
        borderColor: ["rgba(130, 224, 170, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[4],
        data: table_val[5],
        backgroundColor: ["rgba(247, 220, 111, 0.7)"],
        borderColor: ["rgba(247, 220, 111, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[5],
        data: table_val[6],
        backgroundColor: ["rgba(229, 152, 102, 0.7)"],
        borderColor: ["rgba(229, 152, 102, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[6],
        data: table_val[7],
        backgroundColor: ["rgba(229, 152, 102, 0.7)"],
        borderColor: ["rgba(229, 152, 102, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[7],
        data: table_val[8],
        backgroundColor: ["rgba(44, 62, 80, 0.7)"],
        borderColor: ["rgba(44, 62, 80, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[8],
        data: table_val[9],
        backgroundColor: ["rgba(169, 50, 38, 0.7)"],
        borderColor: ["rgba(169, 50, 38, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[9],
        data: table_val[10],
        backgroundColor: ["rgba(142, 68, 173, 0.7)"],
        borderColor: ["rgba(142, 68, 173, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[10],
        data: table_val[11],
        backgroundColor: ["rgba(82, 190, 128, 0.7)"],
        borderColor: ["rgba(82, 190, 128, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[11],
        data: table_val[12],
        backgroundColor: ["rgba(247, 220, 111, 1)"],
        borderColor: ["rgba(247, 220, 111, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country12],
        data: table_val[13],
        backgroundColor: ["rgba(235, 152, 78, 1)"],
        borderColor: ["rgba(235, 152, 78, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[13],
        data: table_val[14],
        backgroundColor: ["rgba(220, 118, 51, 1)"],
        borderColor: ["rgba(220, 118, 51, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[14],
        data: table_val[15],
        backgroundColor: ["rgba(170, 183, 184, 1)"],
        borderColor: ["rgba(170, 183, 184, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[15],
        data: table_val[16],
        backgroundColor: ["rgba(44, 62, 80, 1)"],
        borderColor: ["rgba(44, 62, 80, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[16],
        data: table_val[17],
        backgroundColor: ["rgba(123, 36, 28, 1)"],
        borderColor: ["rgba(123, 36, 28, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[17],
        data: table_val[18],
        backgroundColor: ["rgba(91, 44, 111, 1)"],
        borderColor: ["rgba(91, 44, 111, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[18],
        data: table_val[19],
        backgroundColor: ["rgba(40, 116, 166, 1)"],
        borderColor: ["rgba(40, 116, 166, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[19],
        data: table_val[20],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[20],
        data: table_val[21],
        backgroundColor: ["rgba(17, 120, 100, 1)"],
        borderColor: ["rgba(17, 120, 100, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[21],
        data: table_val[22],
        backgroundColor: ["rgba(126, 81, 9, 0.5)"],
        borderColor: ["rgba(126, 81, 9, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[22],
        data: table_val[23],
        backgroundColor: ["rgba(120, 66, 18, 0.5)"],
        borderColor: ["rgba(120, 66, 18, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[23],
        data: table_val[24],
        backgroundColor: ["rgba(151, 154, 154, 0.5)"],
        borderColor: ["rgba(151, 154, 154, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[24],
        data: table_val[25],
        backgroundColor: ["rgba(81, 90, 90, 0.5)"],
        borderColor: ["rgba(81, 90, 90, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[25],
        data: table_val[26],
        backgroundColor: ["rgba(28, 40, 51, 0.5)"],
        borderColor: ["rgba(28, 40, 51, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[26],
        data: table_val[27],
        backgroundColor: ["rgba(22, 160, 133, 0.5)"],
        borderColor: ["rgba(22, 160, 133, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[27],
        data: table_val[28],
        backgroundColor: ["rgba(165, 105, 189, 0.5)"],
        borderColor: ["rgba(165, 105, 189, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[28],
        data: table_val[29],
        backgroundColor: ["rgba(169, 50, 38, 0.5)"],
        borderColor: ["rgba(169, 50, 38, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[29],
        data: table_val[30],
        backgroundColor: ["rgba(243, 156, 18, 0.5)"],
        borderColor: ["rgba(243, 156, 18, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[30],
        data: table_val[31],
        backgroundColor: ["rgba(44, 62, 80, 0.5)"],
        borderColor: ["rgba(44, 62, 80, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[31],
        data: table_val[32],
        backgroundColor: ["rgba(40, 116, 166, 0.2)"],
        borderColor: ["rgba(40, 116, 166, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[32],
        data: table_val[33],
        backgroundColor: ["rgba(236, 112, 99, 0.2)"],
        borderColor: ["rgba(236, 112, 99, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[33],
        data: table_val[34],
        backgroundColor: ["rgba(220, 118, 51, 0.2)"],
        borderColor: ["rgba(220, 118, 51, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: table_country[34],
        data: table_val[35],
        backgroundColor: ["rgba(191, 201, 202, 0.2)"],
        borderColor: ["rgba(191, 201, 202, 1)"],
        borderWidth: 1,
        hidden: true,
      },
    ],
  },
  options: {
    hitradius: 10,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// ------------we get the variables for graphique n° 2---------------------------------------------------------------------------------

var table2 = document.querySelector("#table2");
var tbody2 = table2.getElementsByTagName("tbody")[0];
var table2Row = tbody2.getElementsByTagName("tr")[0];
var table2Cell = table2Row.getElementsByTagName("td")[0];

// --------------- table2 values -----------------------

var table2_val = [];
var table2_val07 = [];
var table2_val10 = [];
for (r = 0; r < tbody2.getElementsByTagName("tr").length; r++) {
  table2_val[r] = new Array();

  for (i = 1; i < table2Row.getElementsByTagName("td").length; i++) {
    table2_val[r].push(
      parseInt(
        tbody2.getElementsByTagName("tr")[r].getElementsByTagName("td")[i]
          .innerHTML
      )
    );
  }
}

for (i = 0; i < table2_val.length; i++) {
  table2_val07.push(table2_val[i][0]);
}

for (i = 0; i < table2_val.length; i++) {
  table2_val10.push(table2_val[i][1]);
}

// ------------------- table2 country --------------------------

var table2_country = [];

for (r = 0; r < tbody2.getElementsByTagName("tr").length; r++) {
  table2_country.push(
    tbody2.getElementsByTagName("tr")[r].getElementsByTagName("td")[0].innerText
  );
}

// ----------------- canvas2 -------------------------------

var canvas2 = document.createElement("canvas");
canvas2.setAttribute("id", "graph2");
canvas2.setAttribute("width", "auto");
canvas2.setAttribute("height", "250");
table2.before(canvas2);



// ------------------------ graph2 ------------------------------

const ctx2 = document.getElementById("graph2");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: table2_country,
    datasets: [
      {
        label: "2007-09",
        data: table2_val07,
        backgroundColor: ["rgba(52, 152, 219, 0.9)"],
        borderColor: ["rgba(52, 152, 219, 0.9)"],
        borderWidth: 1,
      },
      {
        label: "2010-12",
        data: table2_val10,
        backgroundColor: ["rgba(46, 204, 113, 0.9)"],
        borderColor: ["rgba(46, 204, 113, 09)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// -------------------------------------- Graph 3 -----------------------------------------------------
var valeurs = [];
var axisx = [];
var i = 0;

var canvas3 = document.createElement("canvas");
var firstHeading = document.querySelector("#firstHeading");
canvas3.setAttribute("id", "graph3");
canvas3.setAttribute("width", "auto");
canvas3.setAttribute("height", "150");
firstHeading.after(canvas3);

const ctx3 = document.getElementById("graph3");
const myChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "Statistiques de crimes par secondes",
        data: valeurs,
        borderColor: ["rgba(39, 192, 194, 1)"],
        pointBackgroundColor: [
          "rgba(100,50,90,1)",
          "rgba(241, 196, 15,1)",
          "rgba(39, 174, 96,1)",
          "rgba(231, 76, 60,1)",
          "rgba(112, 123, 124,1)",
          "rgba(91, 44, 111,1)",
          "rgba(33, 47, 61,1)",
          "rgba(93, 173, 226,1)",
          "rgba(229, 152, 102,1)",
          "rgba(195, 155, 211,1)",
        ],
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        suggestedMin: -15,
        suggestedMax: 30,
      },
    },
  },
});

// ----------------------------- table 3 https://canvasjs.com/services/data/datapoints.php ------------------------------------
function test() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://canvasjs.com/services/data/datapoints.php", true);
  xhr.responseType = "json";
  xhr.send();

  // ----------------------------------- load, error, progress --------------------------------------
  var datarecup = [];
  var datarecup2 = [];
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`err ${xhr.status} : ${xhr.statusText}`);
    } else {
      // console.log(JSON.stringify(xhr.response));
      i++;
      // recupère mon 2eme elem de mon tableau
      datarecup = xhr.response.map((elem) => {
        return elem[1];
      });

      datarecup2 = xhr.response.map((elem) => {
        return elem[0];
      });

      // axisx.push(datarecup2);
      // if (i > 10) {
      //   myChart3.data.labels.shift();
      //   myChart3.update();
      // }

      valeurs.push(datarecup);
      myChart3.update();

      if (i > 10) {
        myChart3.data.datasets[0].data.shift();
      }
      myChart3.update();

      // console.log(datarecup2);
    }
  };

  xhr.onerror = function () {
    console.log("requ à échoué");
  };

  xhr.onprogress = function (event) {
    lengthComputable = Boolean;
    if (event.lengthComputable) {
      console.log(`${event.loaded} octets reçu /${event.total}`);
    }
  };
}
setInterval(test, 1000);