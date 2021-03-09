# API Reference: OctoError

The following properties are available on an `OctoError` object.

## `message: string`

Status message as received from the server or the underlying fetch promise.

## `code?: number`

Status code, as provided by the server.

Will be `undefined` when a network error occured or no response from the server was received.

## `data?: any`

Data, received from the server, as transformed by the matching transformer.

Will be `undefined` when a network error occured or no response from the server was received.

## `response?: Response`

Response, as provided by the server.

Will be `undefined` when a network error occured or no response from the server was received.

## `exception?: Error`

Error object, as received from native `fetch`.

Will be `undefined` when no network error occured (eg: 4xx or 5xx)
