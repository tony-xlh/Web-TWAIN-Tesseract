import '../styles/index.scss';
import Dynamsoft from "dwt";

let DWObject;

window.onload = function(){
  initDWT();
};

function registerEvents() {
  document.getElementsByClassName("scan-btn")[0].addEventListener("click",function(){
    if (DWObject) {
      DWObject.SelectSource(function () {
        DWObject.OpenSource();
        DWObject.AcquireImage();
      },
        function () {
          console.log("SelectSource failed!");
        }
      );
    }
  });
  document.getElementsByClassName("load-btn")[0].addEventListener("click",function(){
    if (DWObject) {
      DWObject.IfShowFileDialog = true;
      // PDF Rasterizer Addon is used here to ensure PDF support
      DWObject.Addon.PDF.SetResolution(200);
      DWObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
      DWObject.LoadImageEx("", Dynamsoft.DWT.EnumDWT_ImageType.IT_ALL);
    }
  });
}

function initDWT(){
  const containerID = "dwtcontrolcontainer";
  Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => {
    DWObject = Dynamsoft.DWT.GetWebTwain(containerID);
    DWObject.Viewer.width = "100%";
    DWObject.Viewer.height = "100%";
    registerEvents();
  });
  
  Dynamsoft.DWT.ResourcesPath = "/dwt-resources";
  Dynamsoft.DWT.Containers = [{
      WebTwainId: 'dwtObject',
      ContainerId: containerID
  }];
  Dynamsoft.DWT.Load();
}