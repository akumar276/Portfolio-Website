async function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    var options = {
      hideTabs: false,
      hideToolbar: false,
      onFirstInteractive: function () {
        viz.getWorkbook().getPublishedSheetsInfo();
      }
      
    }
    viz = await new tableau.Viz(containerDiv, url, options);
  }