const request = require('supertest')
const expect = require('chai').expect
const { describe, it } = require('mocha')

const app = require('../../index')
const { apiVersion } = require('../../src/configs/app')
const {
  ADDED,
  VALIDATION_NOT_PASSED,
  INVALID_ID,
  NOT_FOUND
} = require('../../src/utils/messages')
const STATUS = require('../../src/utils/status')

describe(`POST ${apiVersion}players`, () => {
  it('should create a new player statistics', async () => {
    const res = await request(app)
      .post(`${apiVersion}players`)
      .send({
        playerId: 10,
        gameDate: '01/01',
        opponent: 'Team A',
        battingAvg: 0.333,
        plateAppearances: 3,
        atBats: 3,
        runs: 1,
        hits: 1,
        runBattedIn: 1,
        doubles: 0,
        triples: 0,
        homerun: 0,
        class: 'Jr'
      })

    expect(res.statusCode).to.equal(STATUS.OK)
    expect(res.body.message).to.equal(ADDED)
  })

  it('should return a 400 error for missing required body properties', async () => {
    const res = await request(app)
      .post(`${apiVersion}players`)
      .send({
        gameDate: '01/01',
        opponent: 'Team A',
        battingAvg: 0.333,
        plateAppearances: 3,
        atBats: 3,
        runs: 1,
        hits: 1,
        runBattedIn: 1,
        doubles: 0,
        triples: 0,
        homerun: 0,
        class: 'Jr'
      })

    expect(res.statusCode).to.equal(STATUS.BAD_REQUEST)
    expect(res.body.message).to.equal('"playerId" is required' || VALIDATION_NOT_PASSED)
  })
})

describe(`GET ${apiVersion}players/:id/stats`, () => {
  it('should return player stats for a given id', async () => {
    const res = await request(app).get(`${apiVersion}players/1/stats`)
    expect(res.statusCode).to.equal(STATUS.OK)
    expect(res.body).to.have.property('data')
  })

  it('should return 404 if player`s data not found', async () => {
    const res = await request(app).get(`${apiVersion}players/1000/stats`)
    expect(res.statusCode).to.equal(STATUS.NOT_FOUND)
    expect(res.body.message).to.equal(NOT_FOUND)
  })

  it('should return 404 if player_id is invalid', async () => {
    const res = await request(app).get(`${apiVersion}players/abc/stats`)
    expect(res.statusCode).to.equal(STATUS.BAD_REQUEST)
    expect(res.body.message).to.equal(INVALID_ID)
  })
})
