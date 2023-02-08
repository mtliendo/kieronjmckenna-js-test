import { Context } from '@aws-appsync/utils'
// import { AppSyncIdentityCognito } from 'aws-lambda'
import * as AWS from 'aws-sdk'
import * as fs from 'fs'
import { join } from 'path'

var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' })

const client = new AWS.AppSync({
	region: 'us-east-1',
	credentials,
})
const runtime: AWS.AppSync.AppSyncRuntime = {
	name: 'APPSYNC_JS',
	runtimeVersion: '1.0.0',
}
type AppSyncIdentityCognito = {
	sourceIp: string[]
	username: string
	groups: string[] | null
	sub: string
	issuer: string
	claims: any
	defaultAuthStrategy: string
}

describe('test the resolver', () => {
	it('should pass remote check', async () => {
		const code = fs.readFileSync(join(__dirname, 'example-resolver.js'), 'utf8')

		const identity = {
			username: 'Michael',
		} as AppSyncIdentityCognito

		const context = JSON.stringify({
			identity,
		} as Context)

		const response = await client
			.evaluateCode({ code, context, runtime, function: 'request' })
			.promise()

		if (response.evaluationResult) {
			const result = JSON.parse(response.evaluationResult)
			console.log(result)
		} else {
			throw Error(JSON.stringify(response?.error))
		}
	})
})
