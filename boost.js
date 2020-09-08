    var steamClientFactory = require('./steamClient.js');
    var configsArray = [];
    var config;
    var botArray = [];
    
//account 1
    config = {};
    config.username = 'USER';
    config.password = 'PASSWORD';
    config.sharedSecret = ''; //Shared Secret(for 2FA only) https://github.com/Jessecar96/SteamDesktopAuthenticator/releases
    config.games = [730]
    configsArray.push(config);

// account 2
    config = {};
    config.username = 'USER';
    config.password = 'PASSWORD';
    config.sharedSecret = ''; //Shared Secret(for 2FA only) https://github.com/Jessecar96/SteamDesktopAuthenticator/releases
    config.games = [730]
    configsArray.push(config);

// you can add more down

    console.log('Number of configurations set up: ' + configsArray.length);
     
    for	(index = 0; index < configsArray.length; index++) {
    	var config = configsArray[index];
		
		var bot = steamClientFactory.buildBot(config);
		bot.doLogin();
		botArray.push(bot);
    }
	console.clear()
        console.log('Running ' + botArray.length + ' bots.');
	console.log('Number of configurations set up: ' + configsArray.length);
