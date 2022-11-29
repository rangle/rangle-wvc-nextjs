import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { fetcher } from './fetcher'

describe('fetcher functionality', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should fetch from the url and return a JSON object', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
    let result = await fetcher('http://test')
    let excpected = { data: '12345' }
    expect(result).toEqual(excpected)
  })

  it('should throw if status code is not in 200-299 range', async () => {
    fetch.mockReject(() => ({
      ok: false,
      json: () => Promise.resolve('error'),
      status: 500
    }))

    let result
    try {
      result = await fetcher('http://test')
      expect(result).not.toBeDefined()
    } catch (e) {
      expect(e.status).toEqual(500)
      expect(e.info).toEqual('error')
    }
    
  })
})
