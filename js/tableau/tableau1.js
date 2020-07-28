async function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/WorldIndicators/GDPpercapita";
    var options = {
      hideTabs: false,
      hideToolbar: false,
      onFirstInteractive: function () {
        viz.getWorkbook().getPublishedSheetsInfo();
      }
      
    }
    viz = await new tableau.Viz(containerDiv, url, options);
  }