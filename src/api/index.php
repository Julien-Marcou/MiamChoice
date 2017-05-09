<?php

$usersFile = './users.json';
$request = substr($_SERVER['REQUEST_URI'], 4);
$method = $_SERVER['REQUEST_METHOD'];
$today = (new DateTime('today'))->format('Y-m-d');

if($method === 'OPTIONS') {
	// Allow Cross-Origin Resource Sharing (CORS)
	exit();
}
else if($method === 'GET' && $request === '/users') {
	// Get users database
	$usersDb = json_decode(file_get_contents($usersFile));

	// Reset users database if needed
	if($usersDb->date !== $today) {
		$usersDb = new stdClass();
		$usersDb->date = $today;
		$usersDb->users = new stdClass();
	}

	// Return users database
	header('Content-Type: application/json', true, 200);
	echo json_encode($usersDb);
}
else if($method === 'POST' && $request === '/user') {
	// Get post data
	$user = json_decode(file_get_contents('php://input'));

	// Reset users database if needed
	$usersDb = json_decode(file_get_contents($usersFile));
	if($usersDb->date !== $today) {
		$usersDb = new stdClass();
		$usersDb->date = $today;
		$usersDb->users = new stdClass();
	}

	// Set the user
	$usersDb->users->{$user->uuid} = $user;

	// Save users databases
	if(file_put_contents($usersFile, json_encode($usersDb, JSON_PRETTY_PRINT)) === false) {
		// Return error
		header('Content-Type: application/json', true, 500);
		echo json_encode([
			'status' => 'ko',
			'message' => 'Error while creating the content !'
		]);
	}
	else {
		// Return success
		header('Content-Type: application/json', true, 201);
		echo json_encode([
			'status' => 'ok',
			'message' => 'Content created !'
		]);
	}
}
else {
	// Return 404
	header("HTTP/1.1 404 Not Found", true, 404);
	echo "404 Not Found";
}
