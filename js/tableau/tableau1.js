async function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/Worldwide_Covid-19/ConfirmedDashboard";
    var options = {
      hideTabs: false,
      hideToolbar: false,
      onFirstInteractive: function () {
        viz.getWorkbook().getPublishedSheetsInfo();
      }
      
    }
    viz = await new tableau.Viz(containerDiv, url, options);
  }