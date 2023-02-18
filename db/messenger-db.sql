{
	"info": {
		"_postman_id": "3a8bcf5a-7642-4e3b-89be-c141c6b6d7db",
		"name": "Messanger  v 0.1",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "13539992"
	},
	"item": [
		{
			"name": "Auth",
			"item": [
				{
					"name": "Register",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"firstName\":\"Eitan\",\r\n    \"lastName\":\"Kohen\",\r\n    \"username\":\"Eitan1\",\r\n    \"password\":\"123456\",\r\n    \"isOnline\":\"1\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/api/register",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"api",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\":\"cute-kitten1\",\r\n    \"password\":\"123456\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/api/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"api",
								"login"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Home (Get user list)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:4000/api/home",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"home"
					]
				}
			},
			"response": []
		},
		{
			"name": "New Message",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"messageBody\":\"Hello Assaf, this is Alex ?\",\r\n    \"senderUserId\":\"1\",\r\n    \"recipientUserId\":\"9\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4000/api/message",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"message"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get 2 users message list",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "text"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4000/api/chat/3/2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"chat",
						"3",
						"2"
					]
				}
			},
			"response": []
		}
	],
	"auth": {
		"type": "bearer",
		"bearer": [
			{
				"key": "token",
				"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6OSwiZmlyc3ROYW1lIjoiQXNzYWYiLCJsYXN0TmFtZSI6IkZpbmsiLCJ1c2VybmFtZSI6ImN1dGUta2l0dGVuMSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaXNPbmxpbmUiOjF9LCJpYXQiOjE2NzY3MTMwMjksImV4cCI6MTY3NjcyMzgyOX0.PeVoBOTrwYtw9xYnYMY9D5w0xbnM3PIDWDJD2R3S6oc",
				"type": "string"
			}
		]
	},
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	]
}