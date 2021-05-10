
let web3;
var accounts;
var balance = 0;

async function enable(){
        return ethereum.enable();
      }

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
    web3 = new Web3(window.web3.currentProvider);
    //enable();
	web3.eth.net.getId().then(console.log);
	getMetMaskAccounts().then(variable => accounts = variable);
}
else{
}


  var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "staker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Stake",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "unstaker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "unstakingamount",
				"type": "uint256"
			}
		],
		"name": "Unstake",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "allowanceAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "stakingAllowence",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "fullAllowence",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient2",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient3",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient4",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient5",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient6",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient7",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient8",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient9",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient10",
				"type": "address"
			}
		],
		"name": "decupleTransfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount2",
				"type": "uint256"
			}
		],
		"name": "doubleTransfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "giveFullAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "giveStakingAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount2",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient3",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount3",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient4",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount4",
				"type": "uint256"
			}
		],
		"name": "quadrupleTransfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount2",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient3",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount3",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient4",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount4",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient5",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount5",
				"type": "uint256"
			}
		],
		"name": "quintupleTransfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount2",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient3",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount3",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient4",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount4",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient5",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount5",
				"type": "uint256"
			}
		],
		"name": "quintupleTransferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refreshStaking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "refreshStakingFor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "removeFullAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "removeStakingAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "stakeFT",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "stakeFTfor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "stakingStats",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "stakingAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakingBlock",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount2",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient3",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount3",
				"type": "uint256"
			}
		],
		"name": "tripleTransfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unstakeAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "unstakeAllfor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "unstakeFT",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "unstakeFTfor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
  const contract = new web3.eth.Contract(abi,'0x155488a3c962e052c15f9de0f8ee2aae51515747');
  async function getMetMaskAccounts(){
	  return window.ethereum.request({ method: 'eth_requestAccounts' });
  }
    async function getAccounts(){
		getMetMaskAccounts().then(variable => accounts = variable);
      return accounts;
    }

    function stake(){
      if (typeof window.ethereum !== 'undefined') {
      var amount = document.getElementById("amount").value;
      amount *= 10000000000;
      amount = parseInt(amount);
      if(Number.isInteger(amount)){
      if(amount <= 0){
        document.getElementById("status").style.color = "red";
        document.getElementById("status").innerHTML = "Input a value higher than 0";}
      else{

        getAccounts().then(value => getFTbalance(value[0]).then(balance => processStaking(balance, amount)));
      }
      }
      else{
        document.getElementById("status").style.color = "red";
        document.getElementById("status").innerHTML = "Input a valid number";
      }

      }
      else{
        document.getElementById("status").innerHTML = 'Please install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">MetaMask <\a> to use this product';
      }

      
    }
    function processStaking(balance, amount){
        if(balance >= amount){contract.methods.stakeFT(amount).send({from : accounts[0]});}
        else{document.getElementById("status").innerHTML = "Insufficient Balance";}
    }

    function unstake(){
      if (typeof window.ethereum !== 'undefined') {
      var amount = document.getElementById("amount").value;
      amount *= 10000000000;
      amount = parseInt(amount);
      if(Number.isInteger(amount)){
      if(amount <= 0){document.getElementById("status").innerHTML = "Input a value higher than 0";}
      else{

        getAccounts().then(value => getStats(value[0]).then(stats => processUntaking(stats, amount)));
      }
      }
      else{document.getElementById("status").innerHTML = "Input a valid number";}

    }
      else{
        document.getElementById("status").innerHTML = 'Please install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">MetaMask <\a> to use this product';
      }
      
    }
    function processUntaking(stats, amount){
        var staked = parseInt(stats[0]) + parseInt(stats["rewards"]);
        if(amount <= staked){
            getAccounts().then(value => contract.methods.unstakeFT(amount).send({from : accounts[0]}));}
        else{document.getElementById("status").innerHTML = "Insufficient Balance";}
    }

	function claimRewards() {
		if (typeof window.ethereum !== 'undefined') {
			  getAccounts().then(value => getStats(value[0]).then(stats => processClaiming(stats)));
	  }
	  else{
		document.getElementById("status").innerHTML = 'Please install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">MetaMask <\a> to use this product';
	}
	}
	function processClaiming(stats) {
		if(stats["rewards"] > 0){contract.methods.unstakeFT(stats["rewards"]).send({from : accounts[0]});}
		else{document.getElementById("status").innerHTML = "No rewards to claim";}
	}

	function unstakeAll() {
		if (typeof window.ethereum !== 'undefined') {
			  getAccounts().then(value => getStats(value[0]).then(stats => processUnstakeAll(stats)));
	  }
	  else{
		document.getElementById("status").innerHTML = 'Please install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">MetaMask <\a> to use this product';
	}
	}
	function processUnstakeAll(stats) {
		if(stats[0] > 0){contract.methods.unstakeAll().send({from : accounts[0]});}
		else{document.getElementById("status").innerHTML = "No FT to unstake";}
	}

	function refreshStaking() {
		if (typeof window.ethereum !== 'undefined') {
			  getAccounts().then(value => getStats(value[0]).then(stats => processRefreshStaking(stats)));
	  }
	  else{
		document.getElementById("status").innerHTML = 'Please install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">MetaMask <\a> to use this product';
	}
	}
	function processRefreshStaking(stats) {
		if(stats["rewards"] > 0){contract.methods.unstakeAll().send({from : accounts[0]});}
		else{document.getElementById("status").innerHTML = "No FT to re-stake";}
	}

	var myVar = setInterval(displayID, 10000);
	var myVar0 = setInterval(showAddress, 3000);
	var myVar1 = setInterval(loadStats, 3000);
	var myVar2 = setInterval(displayStats, 3000);
	function showAddress(){
		document.getElementById("address").innerHTML =  accounts[0].toLowerCase();
	}
	var statictics;
	function displayStats(){
		document.getElementById("staked").innerHTML = "Staked: " + statictics[0]/10000000000;
		document.getElementById("rewards").innerHTML = "Rewards: " + statictics["rewards"]/10000000000;
	}
	function loadStats(){
		getStats(accounts[0]).then(stats => statictics = stats);
	}
	function displayID(){
		getID().then(ID => processID(ID));
	}


	async function getStats(address){
		return contract.methods.stakingStats(address).call();
	}
	async function getFTbalance(address) {
		return contract.methods.balanceOf(address).call();
	}
	async function getID(){
		return web3.eth.net.getId();
	}
	function processID(ID){
		if(ID != 56){
			document.getElementById("status").style.color =  "red";
			document.getElementById("status").innerHTML = "Please switch to Binance Smart Chain";
      }
	  else{
		document.getElementById("status").innerHTML = "";
	  }
	}
