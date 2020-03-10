import {
    APIGatewayProxyEvent,
    APIGatewayProxyCallback
} from '@types/aws-lambda'

exports.handler = (
    event: APIGatewayProxyEvent,
    context: any,
    callback: APIGatewayProxyCallback
) => {
    const response = {
        message: "Hello World"
    }
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(response)
    })
}