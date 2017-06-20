var json =[{
  id: 1,
  created_time: "2017-06-20 17:43:15",
  status: "finished",
  meta: {
    user: "cqc",
    note: "RC3-0620",
    from: "slack",
    callback: "http://127.0.0.1:20177/index",
    packages: [{
      repo: "pd",
      branch: "master",
      tag: "unknown",
      git_hash: "ce8db87a8c3f2560750232e85ad5152a0a1c69df",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/pd/ce8db87a8c3f2560750232e85ad5152a0a1c69df/centos7/pd_server.tar.gz"
    }, {
      repo: "tikv",
      branch: "master",
      tag: "unknown",
      git_hash: "47712d1e00050fbdf007f1e81e7036581a7ef90c",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tidb/47712d1e00050fbdf007f1e81e7036581a7ef90c/centos7/tikv_server.tar.gz"
    }, {
      repo: "tidb",
      branch: "master",
      tag: "unknown",
      git_hash: "913037ebb970a9b4a66d3a6238cc626cf97f4f3c",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tikv/913037ebb970a9b4a66d3a6238cc626cf97f4f3c/centos7/tidb_server.tar.gz"
    }]
  },
  result: {
    cases: 1,
    details: [{
      name: "simple-select",
      summary: {
        Total: 10000,
        Bytes: 0,
        Error: 0,
        Duration: 10.578,
        Qps: 945.358,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 10000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 8751043.364,
          AvgMs: 875.104,
          MinMs: 15.556,
          MaxMs: 6474.804,
          PercentileMs: 1065.968,
          Percentile: 0.95
        }
      },
      stages: [{
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.209,
        Qps: 905.58,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 1092454.958,
          AvgMs: 546.227,
          MinMs: 47.074,
          MaxMs: 1738.486,
          PercentileMs: 634.733,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.109,
        Qps: 948.185,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 1948659.382,
          AvgMs: 974.33,
          MinMs: 610.401,
          MaxMs: 3417.647,
          PercentileMs: 2938.697,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.122,
        Qps: 942.701,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 2803927.27,
          AvgMs: 1401.964,
          MinMs: 796.965,
          MaxMs: 6434.641,
          PercentileMs: 4605.428,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.056,
        Qps: 972.922,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 2014847.906,
          AvgMs: 1007.424,
          MinMs: 628.11,
          MaxMs: 6474.804,
          PercentileMs: 1059.367,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.082,
        Qps: 960.483,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 891153.848,
          AvgMs: 445.577,
          MinMs: 15.556,
          MaxMs: 660.093,
          PercentileMs: 627.589,
          Percentile: 0.95
        }
      }]
    }],
    msg: ""
  }
}, {
  id: 2,
  created_time: "2017-06-20 17:57:05",
  status: "finished",
  meta: {
    user: "cqc",
    note: "master - 0605",
    from: "slack",
    callback: "http://127.0.0.1:20177/index",
    packages: [{
      repo: "pd",
      branch: "master",
      tag: "rc2-70-gbb61092",
      git_hash: "bb61092e829282152e081bd5e5c816defbaab560",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/pd/bb61092e829282152e081bd5e5c816defbaab560/centos7/pd_server.tar.gz"
    }, {
      repo: "tidb",
      branch: "master",
      tag: "rc2-381-gffee89b",
      git_hash: "ffee89b4290e27283a5a04f452a47379b7f765e2",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tidb/ffee89b4290e27283a5a04f452a47379b7f765e2/centos7/tidb_server.tar.gz"
    }, {
      repo: "tikv",
      branch: "master",
      tag: "rc2-117-g01fefb2",
      git_hash: "01fefb201f5934a327fa0b1e04b016d7130e1f55",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tikv/01fefb201f5934a327fa0b1e04b016d7130e1f55/centos7/tikv_server.tar.gz"
    }]
  },
  result: {
    cases: 1,
    details: [{
      name: "simple-select",
      summary: {
        Total: 10000,
        Bytes: 0,
        Error: 0,
        Duration: 10.357,
        Qps: 965.531,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 10000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 9366847.648,
          AvgMs: 936.685,
          MinMs: 46.376,
          MaxMs: 2218.603,
          PercentileMs: 1057.762,
          Percentile: 0.95
        }
      },
      stages: [{
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.176,
        Qps: 918.992,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 1619502.231,
          AvgMs: 809.751,
          MinMs: 46.376,
          MaxMs: 2169.919,
          PercentileMs: 2043.063,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.067,
        Qps: 967.437,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 2110167.099,
          AvgMs: 1055.084,
          MinMs: 1013.484,
          MaxMs: 2218.603,
          PercentileMs: 1053.765,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.041,
        Qps: 980.07,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 2044869.531,
          AvgMs: 1022.435,
          MinMs: 999.989,
          MaxMs: 1045.943,
          PercentileMs: 1036.045,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.045,
        Qps: 977.896,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 2044632.904,
          AvgMs: 1022.316,
          MinMs: 1000.388,
          MaxMs: 1045.758,
          PercentileMs: 1037.037,
          Percentile: 0.95
        }
      }, {
        Total: 2000,
        Bytes: 0,
        Error: 0,
        Duration: 2.028,
        Qps: 986.404,
        Bps: 0,
        Eps: 0,
        Sql: {
          Read: 2000,
          Write: 0,
          Transaction: 0
        },
        Latency: {
          TotalMs: 1547675.883,
          AvgMs: 773.838,
          MinMs: 469.699,
          MaxMs: 1031.181,
          PercentileMs: 1024.528,
          Percentile: 0.95
        }
      }]
    }],
    msg: ""
  }
}, {
  id: 3,
  created_time: "2017-06-20 18:06:26",
  status: "deploying",
  meta: {
    user: "cqc",
    note: "master - 0605",
    from: "slack",
    callback: "http://127.0.0.1:20177/index",
    packages: [{
      repo: "pd",
      branch: "master",
      tag: "rc2-70-gbb61092",
      git_hash: "bb61092e829282152e081bd5e5c816defbaab560",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/pd/bb61092e829282152e081bd5e5c816defbaab560/centos7/pd_server.tar.gz"
    }, {
      repo: "tidb",
      branch: "master",
      tag: "rc2-381-gffee89b",
      git_hash: "ffee89b4290e27283a5a04f452a47379b7f765e2",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tidb/ffee89b4290e27283a5a04f452a47379b7f765e2/centos7/tidb_server.tar.gz"
    }, {
      repo: "tikv",
      branch: "master",
      tag: "rc2-117-g01fefb2",
      git_hash: "01fefb201f5934a327fa0b1e04b016d7130e1f55",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tikv/01fefb201f5934a327fa0b1e04b016d7130e1f55/centos7/tikv_server.tar.gz"
    }]
  },
  result: {
    cases: 0,
    details: [],
    msg: ""
  }
}, {
  id: 4,
  created_time: "2017-06-20 18:06:30",
  status: "pending",
  meta: {
    user: "cqc",
    note: "RC3-0620",
    from: "slack",
    callback: "http://127.0.0.1:20177/index",
    packages: [{
      repo: "pd",
      branch: "master",
      tag: "unknown",
      git_hash: "ce8db87a8c3f2560750232e85ad5152a0a1c69df",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/pd/ce8db87a8c3f2560750232e85ad5152a0a1c69df/centos7/pd_server.tar.gz"
    }, {
      repo: "tikv",
      branch: "master",
      tag: "unknown",
      git_hash: "47712d1e00050fbdf007f1e81e7036581a7ef90c",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tidb/47712d1e00050fbdf007f1e81e7036581a7ef90c/centos7/tikv_server.tar.gz"
    }, {
      repo: "tidb",
      branch: "master",
      tag: "unknown",
      git_hash: "913037ebb970a9b4a66d3a6238cc626cf97f4f3c",
      platform: "centos7",
      binary_url: "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/tikv/913037ebb970a9b4a66d3a6238cc626cf97f4f3c/centos7/tidb_server.tar.gz"
    }]
  },
  result: {
    cases: 0,
    details: [],
    msg: ""
  }
}];

export default json;