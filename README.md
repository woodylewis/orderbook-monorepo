
# 	Alexa Skill for Stock Orders


### End-to-end TypeScript for Node server, Node AWS Lambda functions and simple React front end.



### sni-voice-3

	Lambda function for Alexa skill
		Input: invocation name and RequestHandler
		Output: RESTful GET call to mongo-lambda
		

### mongo-lambda

	Lambda function to write order record
		Input: RESTful GET call from sni-voice-3
		Output: Write hardcoded order to remote mongodb instance
		
### clob-server

	Node server
		Input: Change in order count from polling remote mongodb instance
		Output: Socket message with latest order as payload
		
### central-limit-orderbook-ui

	React endpoint
		Input: Socket message with latest order as payload
		Output: Additional row displayed on order list


