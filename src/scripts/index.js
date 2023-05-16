import '../styles/index.scss';
import Dynamsoft from "dwt";

console.log('webpack starterkit');
window.onload = function(){
  initDWT();
};

function initDWT(){
  const containerID = "dwtcontrolcontainer";
  Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => {
    const DWObject = Dynamsoft.DWT.GetWebTwain(containerID);
    DWObject.Viewer.width = "100%";
    DWObject.Viewer.height = "100%";
  });
  
  Dynamsoft.DWT.ResourcesPath = "/dwt-resources";
  Dynamsoft.DWT.Containers = [{
      WebTwainId: 'dwtObject',
      ContainerId: containerID
  }];
  Dynamsoft.DWT.Load();
}