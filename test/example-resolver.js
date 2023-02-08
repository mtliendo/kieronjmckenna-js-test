import { util } from '@aws-appsync/utils'

export function request(ctx) {
	const { username } = ctx.identity

	const table = ctx.stash.table

	return {}
}

export function response(ctx) {
	const { error, result } = ctx
	if (error) {
		return util.appendError(error.message, error.type, result)
	}
	return ctx.result
}
