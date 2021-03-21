interface CpuTime {
  idle: number;
  kernel: number;
  total: number;
  user: number;
}

interface ProcessorInfo {
  usage: CpuTime;
}

interface CpuInfo {
  archName: string;
  features: string[];
  modelName: string;
  numOfProcessors: number;
  processors: ProcessorInfo[];
}

interface MemoryInfo {
  availableCapacity: number;
  capacity: number;
}

interface SystemInfo {
  cpu: CpuInfo;
  memory: MemoryInfo;
}

let cpuData: CpuInfo,
  memoryData: MemoryInfo,
  Interval = null;

const fetchAPI = () => {
  chrome.system.cpu.getInfo(function (info) {
    cpuData = info;
  });
  chrome.system.memory.getInfo(function (info) {
    memoryData = info;
  });
  const passingData: SystemInfo = {
    cpu: cpuData,
    memory: memoryData,
  };
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, passingData, function (response) {
        if (!response) {
          alert('connection failed');
          return;
        } else {
          console.log('success');
        }
      });
    }
  });
};

const startTimer = () => {
  Interval = setInterval(fetchAPI, 5000);
};

window.addEventListener('onload', () => {
  fetchAPI();
  startTimer();
});
