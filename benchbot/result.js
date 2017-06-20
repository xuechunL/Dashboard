// Grafana matrixs data
var data = {
	resultType: 'matrixs',
	result: [
		[1497583549, "0.00004526799686868"],
		[1497583649, "0.00004526799686868"],
		[1497583749, "0.00004526799686868"],
		[1497583849, "0.00004526799686868"],
		[1497583949, "0.00004526799686868"]
		// .... 若干 [x,y] value 数组：x表示时间 y表示对应的值 
	]
};

// octopus cases result
var result = {
	cases: 4,// case count
	msg: [{
        "name": "block-write",
        "summary": {
            "Total": 1000000,
            "Bytes": 3071410208,
            "Error": 0,
            "Duration": 713.364,
            "Qps": 1401.809,
            "Bps": 4305530.147,
            "Eps": 0,
            "Sql": {
                "Read": 0,
                "Write": 1000000,
                "Transaction": 0
            },
            "Latency": {
                "TotalMs": 675530250.497,
                "AvgMs": 675.53,
                "MinMs": 126.507,
                "MaxMs": 29991.088,
                "PercentileMs": 2089.256,
                "Percentile": 0.95
            }
        }
    },
    {
        "name": "simple-select",
        "summary": {
            "Total": 1000000,
            "Bytes": 0,
            "Error": 0,
            "Duration": 33.798,
            "Qps": 29587.55,
            "Bps": 0,
            "Eps": 0,
            "Sql": {
                "Read": 1000000,
                "Write": 0,
                "Transaction": 0
            },
            "Latency": {
                "TotalMs": 33458233.976,
                "AvgMs": 33.458,
                "MinMs": 0.827,
                "MaxMs": 1518.664,
                "PercentileMs": 56.986,
                "Percentile": 0.95
            }
        }
    },
    {
        "name": "simple-insert",
        "summary": {
            "Total": 1000000,
            "Bytes": 0,
            "Error": 0,
            "Duration": 425.638,
            "Qps": 2349.414,
            "Bps": 0,
            "Eps": 0,
            "Sql": {
                "Read": 0,
                "Write": 1000000,
                "Transaction": 0
            },
            "Latency": {
                "TotalMs": 403135984.785,
                "AvgMs": 403.136,
                "MinMs": 83.843,
                "MaxMs": 21913.698,
                "PercentileMs": 820.447,
                "Percentile": 0.95
            }
        }
    },
    {
        "name": "simple-delete",
        "summary": {
            "Total": 100000,
            "Bytes": 0,
            "Error": 0,
            "Duration": 65.62,
            "Qps": 1523.926,
            "Bps": 0,
            "Eps": 0,
            "Sql": {
                "Read": 0,
                "Write": 100000,
                "Transaction": 0
            },
            "Latency": {
                "TotalMs": 57403458.67,
                "AvgMs": 574.035,
                "MinMs": 6.951,
                "MaxMs": 17109.471,
                "PercentileMs": 1636.574,
                "Percentile": 0.95
            }
        }
    }
]};