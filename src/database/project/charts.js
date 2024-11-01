const times1 = {
    config:{
      labels: ['10.09', '13.09', '16.09', '18.09', '20.09'],
      datasets: [
        {
          data: [6, 32, 11, 50, 35],
          backgroundColor: '#E3EAFC', 
          borderColor: 'transparent', 
          borderWidth: 1,
          barThickness: 45,
        },
      ],
    },
    options : {
      plugins: {
        legend: {
          display: false, 
        },
        title: {
          display: false,
        
        },
      },
      scales: {
        y: {
          beginAtZero: true, 
          title: {
            display: false,
          },
          
          grid: {
            drawBorder: false,
            color: '#ECECEC',
          },
          ticks: {
            stepSize: 20, 
          }
        },
        x: {
          title: {
            display: false,
        
          },
          grid: {
            display: false,
          }
        }
      }
    }
};
const times = {
  config:{
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
      {
        data: [20010, 17000, 14000, 17000, 7900, 8500, 6700, 7400, 5100, 4508],
        backgroundColor: '#E3EAFC', 
        borderColor: 'transparent', 
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  },
  options : {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
        title: {
          display: false,
        },
        
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
        ticks: {
          callback: function(value) {
            const customTicks = [0, 5000, 10000, 15000, 20000]; 
            if (customTicks.includes(value)) {
              return value; 
            }
            return ''; 
          },
          stepSize: 5000, 
          max: 21000
        }
      },
      x: {
        title: {
          display: false,
      
        },
        grid: {
          display: false,
        }
      }
    }
  }
};
const wallet = {
  config:{
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
      {
        data: [10500, 9000, 4500, 5000, 1000, 900, 800, 700, 600, 350],
        backgroundColor: '#E3EAFC', 
        borderColor: 'transparent', 
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  },
  options : {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
        title: {
          display: false,
        },
        
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
        ticks: {
          callback: function(value) {
            const customTicks = [0, 100, 500, 2500, 5000, 10000]; 
            if (customTicks.includes(value)) {
              return value.toLocaleString() + (value === 10000 ? '+' : ''); 
            }
            return ''; 
          },
          stepSize: 500, 
          max: 10000 
        }
      },
      x: {
        title: {
          display: false,
      
        },
        grid: {
          display: false,
        }
      }
    }
  }
};
const passport = {
  config:{
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
      {
        data: [45, 33, 29, 30, 19, 17, 18, 17, 10, 8],
        backgroundColor: '#E3EAFC', 
        borderColor: 'transparent', 
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  },
  options : {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
        title: {
          display: false,
        },
        
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
        ticks: {
          callback: function(value) {
            const customTicks = [10, 20, 30, 40, 55]; 
            if (customTicks.includes(value)) {
              return value; 
            }
            return ''; 
          },
          stepSize: 10, 
          max: 40 
        }
      },
      x: {
        title: {
          display: false,
      
        },
        grid: {
          display: false,
        }
      }
    }
  }
};
const invested = {
  config:{
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
      {
        data: [51, 35, 29, 31, 19, 17, 18, 17, 10, 8],
        backgroundColor: '#E3EAFC', 
        borderColor: 'transparent', 
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  },
  options : {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
        title: {
          display: false,
        },
        
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
        ticks: {
          callback: function(value) {
            const customTicks = [0, 10, 20, 30, 40, 50, 60]; 
            if (customTicks.includes(value)) {
              return value; 
            }
            return ''; 
          },
          stepSize: 10, 
          max: 70 
        }
      },
      x: {
        title: {
          display: false,
      
        },
        grid: {
          display: false,
        }
      }
    }
  }
};
const completed = {
  config:{
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
      {
        data: [51, 31, 24, 36, 11, 24, 15, 17, 11, 8],
        backgroundColor: '#E3EAFC', 
        borderColor: 'transparent', 
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  },
  options : {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
        title: {
          display: false,
        },
        
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
        ticks: {
          callback: function(value) {
            const customTicks = [0, 10, 20, 30, 40, 50, 60]; 
            if (customTicks.includes(value)) {
              return value; 
            }
            return ''; 
          },
          stepSize: 10, 
          max: 70 
        }
      },
      x: {
        title: {
          display: false,
      
        },
        grid: {
          display: false,
        }
      }
    }
  }
};
const airdrop = {
  config:{
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
      {
        data: [20010, 17000, 14000, 17000, 7900, 8500, 6700, 7400, 5100, 4508],
        backgroundColor: '#E3EAFC', 
        borderColor: 'transparent', 
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  },
  options : {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
        title: {
          display: false,
        },
        
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
        ticks: {
          callback: function(value) {
            const customTicks = [0, 5000, 10000, 15000, 20000]; 
            if (customTicks.includes(value)) {
              return value; 
            }
            return ''; 
          },
          stepSize: 5000, 
          max: 21000
        }
      },
      x: {
        title: {
          display: false,
      
        },
        grid: {
          display: false,
        }
      }
    }
  }
};



export { passport, times, invested, wallet, completed, airdrop, times1 };